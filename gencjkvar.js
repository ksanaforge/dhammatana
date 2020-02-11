var unihanvariants=require("./unihanvariants.js")
const extra={"盘":"槃",
"a":"ā","i":"ī","u":"ū",
 "m":["ṁ","ṃ","ŋ"],"n":["ṅ","ñ","ṇ"],"t":"ṭ","d":"ḍ","l":"ḷ",
 "A":"Ā","I":"Ī","U":"Ū",
 "M":["Ṁ","Ṃ","Ŋ"],"N":["Ṅ","Ñ","Ṇ"],"T":"Ṭ","D":"Ḍ","L":"Ḷ"
}
for (var key in extra){
	if (!unihanvariants[key]) {
		unihanvariants[key]=extra[key];
		continue;
	}
	if (typeof unihanvariants[key]=="string"){
		unihanvariants[key]=[unihanvariants[key],extra[key]]
	} else {
		unihanvariants[key].push(extra[key]);
	}
}


const fs=require("fs");
var out=[];
for (var key in unihanvariants) {
	var v=unihanvariants[key];
	var o=[key];
	if (typeof v=="object") {
		o=o.concat(v);
	} else {
		o.push(v);
	}
	o.sort();
	out.push(o.join("|"));
}
const unique=function(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
const hascommon=function(a1,a2){
	var common=0;
	for (var i=0;i<a1.length;i++){
		for (var j=0;j<a2.length;j++){
			if (a1[i]==a2[j]) common++;
		}
	}
	return common>0;
}

const combine=function(arr){
	for (var i=0;i<arr.length;i++){
		if (!arr[i]) continue;//merged
		for (var j=i+1;j<arr.length;j++) {
			if (arr[i]&&arr[j]&&hascommon(arr[i],arr[j])){
				arr[i]=arr[i].concat(arr[j]);
				arr[i]=unique(arr[i]);
				arr[j]=null;
			}
		}
	}
	const res=[]
	arr.forEach(function(item){
		if(item)res.push(item.join(""));
	});
	return res;
}


out.sort();
out=unique(out);
for (var i=0;i<out.length;i++) out[i]=out[i].split("|");

const res=combine(out);
//must have extra space begining and end of string
fs.writeFileSync("cjkvar.js","window.cjkvar=\" "+res.join(" ")+" \";","utf8");