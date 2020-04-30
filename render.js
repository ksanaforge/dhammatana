(function(){
const gettitle=function(obj,key,opts){;
	if (!obj) return false;
	var def=obj.title;
	if (def&&def[opts.language]) def=def[opts.language];
	
	if (!def) def=obj[opts.language];
	var at=def?def.indexOf("|"):-1;
	if (at>-1){
		def=def.substr(0,at);
	}
	if (!def) def=key;
	return def;
}

const closenode=function(obj,id,parentid){
	setTimeout(function(){
		const repl=obj.parentNode.parentNode.parentNode;
		repl.outerHTML=renderlink(api.dataset.dict,id,parentid,api.options);
	},0);	
}
const opennode=function(obj,id,parentid){
	var opts=Object.assign({parentid:parentid},api.options);
	var res="<div class=nesting>";
	res+=rendernodecontrol(id,opts);
	res+=rendernode(api.dataset.dict,id,opts);

	res+="</div>";
	obj.parentNode.innerHTML=res;
}

const movetop=function(obj,id){
	var arr=document.location.hash.split("#");
	if (!arr[0])arr.shift();
	const top=arr[0]||"";
	var out=[];
	for (var i=0;i<arr.length;i++) {
		if (arr[i]!=id && arr[i]) out.push(arr[i]);
	}
	if (top!==id) out.unshift(id);
	document.location.hash="#"+out.join("#");
}
const rendernodecontrol=function(id,opts){
	var res= "<div class=nodecontrol>";

	res+="<span class=closebutton onclick=api.closenode(this,'"
		+id+"','"+opts.parentid+"')></span>";
	res+="</div>";
	return res;
}

const renderlink=function(dict,id,parentid,opts){
	var title="";
	var at=id.indexOf("|");
	if (at>0) {
		title=id.substr(at+1);
		//uid=id.substr(0,at);
	} else {
		title=gettitle(dict[id],id,opts);
	}

	const linkclasses=[opts.linkclass||"nodelink"];
	const unknownlinkclass=opts.unknownlinkclass||"unknownlink";

	if (id==opts.parentid) linkclasses.push("backref");
	var res= "<span>";
	res+=title?"<span class='"+linkclasses.join(" ")+
				"' onclick=api.opennode(this,'"+id+"','"+
				parentid+"')>"+title+"</span>"
			 : "<span class="+unknownlinkclass+">"+id+"</span>";
	res+="</span>"
	return res;
}

const renderlinks=function(dict,links,parentid,opts){
	var count=0;
	var res="";
	for (var i=0;i<links.length;i++){
		var id=links[i];
		if (parentid==id)continue;
		if (opts.homepage==id)continue;
		if (count) res+="<span class="+(opts.linksepclass||"")+"></span>";
		count++;
		res+= renderlink(dict,id,parentid,opts);
	}
	
 	res="<div class="+(opts.linksclass||"")+">"+res;
	res+='</div>';
	return res;
}
const regex_inlinelink=/#(.+?);/g
//const regex_inlinelink=new RegExp("#(.+?);","g");
const rendertextwithlink=function(str,dict,opts){
	if (opts.tofind) { //break into pieces
		const arr=[];
		var at=0;
		str.replace(regex_inlinelink,function(m,m1,cur){
			arr.push( str.substring(at,cur));
			arr.push( renderlink(dict,m1,"",opts));
			at=cur+m.length;
		});

		arr.push(str.substr(at));
		var out=[];
		for (var i=0;i<arr.length;i++){
			if (arr[i][0]=="<") {
				out.push(arr[i]);
				continue;
			}
			var highlighted=arr[i];
			if (opts.tofind) {
				highlighted=highlighted.replace(opts.tofindregex,function(m){
					return "<span class=hl>"+m+"</span>"
				});
				out.push(highlighted);
			}
		}
		return out.join("");
	} else {

		return str.replace(regex_inlinelink,function(m,m1){
			return renderlink(dict,m1,"",opts);
		})
	}
}
const rubyregex=/(\S+)\((\S+)\)/g
const renderruby=function(dict,id,str,opts){
	let out="",o=0,offset=0;
	str.replace(rubyregex,(m,m1,m2,o)=>{
		out+=str.substring(offset,o);
		out+="<ruby><rb>"+m1+'</rb><rt>'+m2+"</rt></ruby>";
		offset=o+m.length;
	});
	out+=str.substr(offset);
	return out.replace(/\n/g,"<br/>");
}
const renderstring=function(dict,id,str,opts){
	var res="";
	if (str.substr(0,1)=="#") {
		const links=str.split("#");
		links.shift();
		for (var i in links){
			res+=renderlink(dict,links[i],id,opts)+ " ";
		}
	} else {
		const s=rendertextwithlink(str,dict,opts);
		return (opts.valuecls)?"<span class="+opts.valuecls+">"+s+"</span>"
							:s;
	}
	return res;
}
const defhandler=function(dict,id,att,opts){
	var res="",item=dict[id][att];
	const type=typeof dict[id][att];
	const attr=opts.typedef[att];
	const attrname=gettitle(attr,id,opts)||"";
	if (!attr){
		console.warn("unknow attribute type",att);
		return "";
	}

	const options=Object.assign({valuecls:attr.valuecls},opts);
	if (type=="string") {

		if (options.title==item&&opts.language==att) return ""; //already used as title
		if (dict[id][att]==" ") {

			return "";//empty place holder
		}
		res+=attrname?"<span class="+(attr.cls||"attr")+">"+attrname+"</span>"
		             :"<span>";

		if (att=="ruby") {
			res+=renderruby(dict,id,dict[id][att],options);
		} else {
			res+=renderstring(dict,id,dict[id][att],options);
		}
		res+="</span>";
	} else if (type=="object") {
		res+=attrname?"<span class="+(attr.cls||"attr")+">"+attrname+"</span>"
		             :"";
		res+="<span>";
		for (var i in item){
			res+=renderstring(dict,id,item[i],options);
		}
		res+="</span> ";
	}
	return res;
}

const rendervalue=function(dict,id,att,opts){
	var res="";
	const handler=defhandler;
	res=handler(dict,id,att,opts);
	return res;
}

const renderattributes=function(dict,id,opts){
	var res="";
	for (var att in dict[id]){
		if (att=="id")continue;
		res+=rendervalue(dict,id,att,opts);
	}
	return res;
}
const getbacklinks=function(id){
	const out=[];
	const forward=api.dataset.forward;
	for (var key in api.dataset.invert[id]){
		if (!forward[id]||typeof forward[id][key]=="undefined") {
			out.push(key);
		}
	}

	return out;
}
const rendernode=function(dict,id,opts,first){
	const at=id.indexOf("|");
	if(at>0) id=id.substr(0,at);

	if (!dict[id]) return "<span class=unknown>? "+id+"</span>";

	const firsttitle=first?" firsttitle":"";
	var res="<span class='title"+firsttitle+
			"' onclick=api.movetop(this,'"+id+"') "+
			" title=#"+id+">";
	var title=gettitle(dict[id],id,opts);
	const renderedtitle=title.replace(opts.tofindregex,function(m){
		return "<span class=hl>"+m+"</span>"
	});

	res+=renderedtitle+"</span>";
	res+=renderattributes(dict,id,Object.assign({title:title},opts));

	const linksopts=Object.assign({
		linkclass:"backlink",linksclass:"backlinks",linksepclass:"linksep"
},opts);
	res+=renderlinks(dict,getbacklinks(id),id,linksopts);
	return res;
}
const clearall=function(){
	document.location.hash="";
}
const showunknownnode=function(obj,id,parentid){
	setTimeout(function(){
		clearall()
		movetop(obj,id);
	},1);
}
const renderunknownlinks=function(unknown){
	var res=[];

	for (i in unknown){
		res.push("<span class=backlink onclick=api.showunknownnode(this,'"+
			unknown[i]+"','"+i+"')>"+i+"</span>");
	}
	return res.join(" ");
}
const rendermain=function(opts){
	var res="";
	var pages=(typeof opts.pages=="string")?[opts.pages]:opts.pages;
	for (var i in pages) {
		res+="<div class=node>"
		res+=rendernode(opts.dataset.dict,pages[i],opts,i==0);
		res+="</div>";
	}
	return res;
}
const rendersearch=function(sr,tf) {
	var res=[];
	if (!sr.length && tf) return "Not found 找不到"
	for (i=0;i<sr.length;i++){
		const id=sr[i][0],score=sr[i][1];
		res.push("<span class=backlink onclick=api.movetop(this,'"+
			id+"')>"+gettitle(api.dataset.dict[id],id,api.options)+"</span>");
	}
	return res.join("|");
}
const exporting={rendermain:rendermain,
	rendersearch:rendersearch,
	renderunknownlinks:renderunknownlinks,
	movetop:movetop,opennode:opennode,closenode:closenode,
	showunknownnode:showunknownnode
}
if (typeof module!=="undefined") {
	module.exports=exporting;
} else {
	window.renderer=exporting;
}
})();