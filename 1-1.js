const fs = require('fs')

const text = fs.readFileSync('1-1-input.txt').toString().split('\r\n');

var listLeft = [];
var listRight = []; 

for(let i = 0; i < text.length; i++){
    var number = text[i].split("   ")
    var numberLeft = number[0];
    listLeft.push(numberLeft)
    var numberRight = number[1];
    listRight.push(numberRight)
}

listLeft.sort((a,b)=>a-b);
listRight.sort((a,b)=>a-b);

var listResult = [];

for(let i=0; i<listLeft.length;i++){
    result = listLeft[i]-listRight[i];
    if(result < 0){
        result = result*-1;
    }
    listResult.push(result);
    console.log(result)
}

const Result = listResult.reduce((total,a)=> total+a,0)
console.log(Result);