
let data=require("./data.js");
let prefer="zh";
let supportedlanguages={"zh":"中","en":"英","pali":"巴"};
const printlanguage=function(txt,language){
	if (language!==prefer){
		console.log("<span class='language'>"+supportedlanguages[language]+"</span>",txt)		
	}
}
const gettitle=function(key){
	let obj=data[key];
	if (!obj) return false;
	let def=obj[prefer]||key;
	if (def && typeof def[0]=="String") def=def[0];
	return def;
}
const printtitle=function(title){
	console.log("<h2>"+title+"</h2>")
}
const print_link=function(id){
	let title=gettitle(id);
	if (!title) {
		console.log("<span class='missing'>"+id+"</span>")
	}else{
		console.log('<a href="#'+id+'">'+title+"<a>")
	};
}
const print_links=function(arr,cls){
	cls&&console.log("<br/><span class='"+cls+"'></span>");
	for (var i in arr){
		print_link(arr[i]);
	}
}
const inarr=function(id, setname){
	let arr=[];
	for (var i in data) {
		let obj=data[i];
		if (obj[setname]&&obj[setname].indexOf(id)>-1){
			arr.push(i);
		}
	}
	return arr;
}

const print_memberof=function(arr){
	if (!arr || !arr.length)return;
	console.log("<br/><span class='memberof'></span>");
	print_links(arr);
}
const print_deriving=function(arr){
	if (!arr || !arr.length)return;
	console.log("<br/><span class='deriving'></span>");
	print_links(arr);
}
const print_is=function(arr){
	console.log("<br/><span class='is'></span>");
	for (var i in arr){
		data[arr[i]]&&print_link(arr[i]);
	}	
}
const print=function(obj,key){
	console.log('<a name="'+key+'"></a>');
	printtitle(gettitle(key));

	for (let lan in supportedlanguages) {
		if (obj[lan]) {
			printlanguage(obj[lan],lan);
		}
	}

	obj.has&&print_links(obj.has,"has");
	obj.is&&print_links(obj.is,"is");

	print_memberof(inarr(key,"has"));
	print_deriving(inarr(key,"is"));
}


console.log('<html><head><meta charset="UTF-8">'+
	  '<link href="main.css" rel="stylesheet">'+
	  '<body>');
for (var id in data) {
	print(data[id],id);
}
console.log("</body></html>");