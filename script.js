let log=new Map();
let store=new Map();
const dateTime = `${(new Date(`${new Date()}`)).toLocaleString()}`;
//console.log(dateTime);

class Cipher{
    constructor(key=123){
        this.key=key;
    }

   
//encoding
 async encode(enStr) {
    var enc=[];
    for(var i=0;i<enStr.length;i++){
        enc.push([enStr[i].charCodeAt()*this.key, ';'].join(''));
    }
     store.set(enc.join(''),enStr);
     log.set(`${dateTime}`,`${enStr} encoded as ${enc.join('')}`);
     return enc.join('');
}

//decoding
async decode(enStr){
    var out='';
    if(store.has(enStr)){
        out=store.get(enStr);
    }
    else{
        for(var i=0;i<enStr.length;i++){
            out+=String.fromCharCode(enStr[i]/this.key);
        }
    }

    log.set(`${dateTime}`,`${enStr} decoded as ${out}`);
    return out;
    
}

  readLog(){
    for (const [key, value] of log.entries()) {
        console.log(key, value);
      }
    
}
}

  (async () => {
    const ci = new Cipher(20);
    msg = await ci.encode('DevSchool');
    console.log(msg);
    console.log(await ci.decode(msg));
    console.log(ci.readLog());
  })();

  
 