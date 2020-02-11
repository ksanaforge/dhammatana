(function(){
	const parsestr=function(str){
		const attname=str.attname||"note";
		const res=[];
		const arr=str.split("\n");
		for (var i=0;i<arr.length;i++) {
			const item=arr[i];
			const at=item.indexOf("=");
			if (at>-1) {
				const obj={id:item.substr(0,at)};
				obj[attname]=item.substr(at+1);
				res.push(obj);
			}
		}
		return res;
	}
	const combine=function(res,arr){
		if (typeof arr=="string"){
			arr=parsestr(arr);

		}
		for (var i=0;i<arr.length;i++){
			var item=arr[i];
			if (typeof item.id=="undefined"){
				console.error("missing id",item)
				continue;
			}
			if (res[item.id]) {
				console.error("duplicate id",item.id,res[item.id]);
			} else {
				res[item.id]=item;
			}
			
		}
		return res;
	}
	const builddictionary=function(wordsets){
		var res={};
		if (wordsets.length==1) {
			wordsets=[wordsets];
		}
		for (var i in wordsets){
			res=combine(res,wordsets[i]);
		}
		return res;
	}
	const breakstringtoid=function(str,id2){
		if (str.substr(0,1)=="#") {
			const items=str.split("#");
			items.shift();
			if(items[items.lenght-1]=="")items.pop();
			return items;
		}
		return [str];
	}
	const buildinvertindex=function(dictionary,forwardindex){
		var res={};
		for (var id in forwardindex){
			const children=forwardindex[id];
			for (var id2 in children) {
				if (!res[id2]) res[id2]={};
				if (!res[id2][id]) res[id2][id]=0;
				res[id2][id]++;
			}
		}
		return res;
	}
	const unknown={};
	
	//const regex_inlinelink=new RegExp("#(.+?);","g");

	const regex_inlinelink=/#(.+?);/g
	const buildforwardindex=function(dictionary){
		const res={};	
		for (var id in dictionary){
			const obj=dictionary[id];
			for (att in obj){
				var tocheckid=false;
				if (att=="id")continue;
				const t=typeof obj[att];
				items=obj[att];
				if (t=="string") {
					if (items[0]!=="#") {
						var s=obj[att].replace(/&/g,"&amp;");
						obj[att]=s.replace(/</g,"&lt;").replace(/>/g,"&gt;");
						items=[];
						
						obj[att].replace(regex_inlinelink,function(m,m1){
							const at=m1.indexOf("|");
							if (at>0) m1=m1.substr(0,at);
							items.push(m1);
						});
					} else {
						items=breakstringtoid(obj[att],id);
						if (obj[att][0]=="#") tocheckid=true;						
					}

				}

				for (var i in items) {
					const str=items[i];
					if (typeof dictionary[str]!=="undefined"){
						if (!res[id]) res[id]={};
						if (!res[id][str]) res[id][str]=0;
						res[id][str]++
					} else {
						if (tocheckid) {
							unknown[str]=id;
						}
					}
				}
			}
		}
		return res;
	}
	const getrequirefield=function(typedef){
		var res={};
		for (var attr in typedef) {
			var attrdef=typedef[attr];
			for (var key in attrdef) {
				if (key=='req' && attrdef[key]) res[attr]=true;
			}
		}
		return res;
	}
	const validatedictionary=function(dict,typedef,requirefield){
		const invalidentries=[];
		for (var id in dict){
			for (var reqs in requirefield){
				if (!dict[id][reqs]) {
					invalidentries.push([id,'missing '+reqs]);
				}
			}
		}
		return invalidentries;

	}
	const build=function(wordsets,config){

		const dict=builddictionary(wordsets);
		const requirefield=getrequirefield(config.typedef);
		const invalidentries=validatedictionary(dict,config.typedef,requirefield);
		const forwardindex=buildforwardindex(dict);

		return {
			dict:dict,
			wordcount:Object.keys(dict).length,
			unknown:unknown,
			invalidentries:invalidentries,
			requirefield:requirefield,
			unknowncount:Object.keys(unknown).length,
			forward:forwardindex,
			invert:buildinvertindex(dict,forwardindex)
		}
	}
	const toToken=function(q){
		var out=[],i=0;
		while (i<q.length){
			var c=q.charCodeAt(i);
			if (c>=0xd800&&c<=0xdbff) {
				out.push(q[i]+q[i+1]);
				i++;
			} else {
				out.push(q[i]);
			}
			i++;
		}
		return out;
	}
	const expandVar=function(s){
		//expand a cjk to variants reg 
		// “涅槃” = “涅[盘盤槃]”
		const tokens=toToken(s);

		const out=[];
		tokens.forEach(function(tk){
			const at=cjkvar.indexOf(tk);
			if (at<0) {
				out.push(tk);
			}else {
				var s=at;e=at+1;
				while (s>0&&cjkvar[s]!=" ")s--;
				while (e<cjkvar.length-1&&cjkvar[e]!=" ")e++;
				const m=cjkvar.substring(s+1,e);
				out.push("["+m+"]");
			}
		})
		return out.join("");
	}
	const dosearch=function(s,regex,tofindlen){
		var score=0,doclen=s.length;
		
		s.replace(regex,function(){
			score+=tofindlen/doclen;
			if (tofindlen==doclen) {
				score*=3;//完全符合 加權
			}
		});
		return score;
	}
	const search=function(dataset,tofind,tofindregex){
		tofind=tofind.trim();
		if (!tofind)return[];
		const dict=dataset.dict;
		var res=[];
		var tofindlen=tofind.length;

		for (var id in dict) {
			var weight=0;
			var objscore=0;
			const obj=dict[id];
			for (var k in obj) {
				if (k=="id")continue;
				const v=obj[k];
				if (typeof v!=="string") continue;
				if (v.substr(0,1)=="#") continue;//do not scan id

				const score=dosearch(v,tofindregex,tofindlen);
				objscore+=score;
				if (score>0) weight++;
			}
			objscore*=weight;
			if (objscore) {
				res.push([id,objscore]);
			}
		}
		res.sort(function(a,b){return b[1]-a[1]});
		return res;
	}
	const exporting={build:build,search:search,toToken:toToken,
		expandVar:expandVar}
	if (typeof module!=="undefined") {
	  module.exports=exporting;
	} else {
		window.builder=exporting;
	}
})();