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
    var sum = 0;
    var result = 0;
    for (let j = 0; j < listRight.length; j++) {
        if(listLeft[i]==listRight[j]){
            sum++
        }
        result = listLeft[i]*sum;
    }
    listResult.push(result);
    console.log(i+" "+result)
}

const Result = listResult.reduce((total,a)=> total+a,0)
console.log(Result);