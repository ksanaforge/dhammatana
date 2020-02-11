const toToken=function(q){ //stupid, should reuse tokenizer
		var out=[],i=0;
		while (i<q.length){
			var c=q.charCodeAt(i);
			if (c>=0xd800&&c<=0xdbff) {
				out.push(q[i]+q[i+1]);
				i++;
			} else if (c>=0x3400&&c<=0x9FFF) {
				out.push(q[i]);
			} else {
				var s="";
				while (i<q.length&&(c<0x3400||c>0x9fff)) {
					s+=q[i++];
					c=q.charCodeAt(i);
				}
				out.push(s);
			}
			i++;
		}
		return out;
	}