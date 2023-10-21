const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890[];?!@#$%&*()+".split("");

export function hackerEffect(text,result,iterationNumber,delay, callback){
    let textArray = text.split("");
    
    for(var i = 0; i < textArray.length; i++){
        if(iterationNumber / 10 < i+1){
            textArray[i] = randomChar();
        }else if(iterationNumber / 10 == i+1){
            textArray[i] = result.charAt(i);
        }
    }

    callback(textArray.join(""));

    setTimeout(() => hackerEffect(textArray.join(""),result,++iterationNumber,delay,callback),delay);
}

function randomChar(){
    return chars[Math.floor(Math.random() * chars.length)];
}

export function randomChars(amount){
    return new Array(amount).fill("").map(() => randomChar()).join("");
}