const fs = require('fs')

const text = fs.readFileSync('./3-1-input.txt').toString().split("mul(");

var output = [];

for (let i = 0; i < text.length; i++) {
    var initalLine = text[i];
    var state = "Ok";

    var firstValue = 0;
    var secondValue = 0;
    console.log(initalLine)

    var firstNumberOne = initalLine[0]
    var firstNumberTwo = initalLine[0]+initalLine[1]
    var firstNumberThree = initalLine[0]+initalLine[1]+initalLine[2]
    console.log(`Valor1=${firstNumberOne} Valor2=${firstNumberTwo} Valor3=${firstNumberThree}`)
    if(Number(firstNumberOne) > 0){
        firstValue = firstNumberOne;
    }
    if(Number(firstNumberTwo) > 0){
        firstValue = firstNumberTwo;
    }
    if(Number(firstNumberThree) > 0){
        firstValue = firstNumberThree;
    }

    console.log("First Value = "+firstValue+" Lenght = "+firstValue.length)

    console.log(initalLine[firstValue.length])
    if(initalLine[firstValue.length]!=","){
        state = "Error"
    }
    var secondNumberOne = initalLine[firstValue.length+1]
    var secondNumberTwo = initalLine[firstValue.length+1]+initalLine[firstValue.length+2]
    var secondNumberThree = initalLine[firstValue.length+1]+initalLine[firstValue.length+2]+initalLine[firstValue.length+3]

    if(Number(secondNumberOne) > 0){
        secondValue = secondNumberOne;
    }
    if(Number(secondNumberTwo) > 0){
        secondValue = secondNumberTwo;
    }
    if(Number(secondNumberThree) > 0){
        secondValue = secondNumberThree;
    }
    var closeNumbers = initalLine[firstValue.length+secondValue.length+1]


    console.log("Second Value = "+secondValue+" Lenght = "+secondValue.length)
    if(firstValue*secondValue >0 && state == "Ok" && closeNumbers == ")"){
        let result = firstValue*secondValue;
        output.push(result);
    }
}
console.log(output)

console.log(output.reduce((total,a)=>total+=a,0))