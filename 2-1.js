const fs = require('fs');

const text = fs.readFileSync('./2-2-input.txt').toString().split('\r\n');

var output = [];

var result = 0;

for(let i=0;i<text.length;i++){
    numberList = text[i].split(' ')

    var type = 'Crescente'

    var state = 'Safe';
    for (let j = 0; j < numberList.length-1; j++) {
        if(numberList[0]-numberList[1] > 0){
            type = 'Decrescente';
        }
        if(numberList[j]-numberList[j+1] == 0){
            state = 'Unsafe'
        }
        if(type == 'Crescente' && numberList[j]-numberList[j+1] > 0){
            state = 'Unsafe'
        }
        if(type == 'Decrescente' && numberList[j]-numberList[j+1] < 0){
            state = 'Unsafe'
        }
        if(type == 'Crescente' && numberList[j]-numberList[j+1] < -3){
            state = 'Unsafe'
        }
        if(type == 'Decrescente' && numberList[j]-numberList[j+1] > 3){
            state = 'Unsafe'
        }

    }
    if(state == 'Safe'){
        result++;
    }
    output.push(state)

}
console.log(result)