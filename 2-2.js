const fs = require('fs');

const text = fs.readFileSync('./2-1-input.txt').toString().split('\r\n');

var output = [];

var result = 0;

for(let i=0;i< text.length ;i++){
    numberList = text[i].split(' ')
    state = returnSafe(numberList);
    
    if(state == 'Safe'){
        console.log("==== Safe ====")
        result++;
    }
    if(state == 'Unsafe'){
        console.log("==== Unsafe ====")
        var newNumberList = validateIfUnsafe(numberList);

        for (let p = 0; p < newNumberList.length; p++) {
            state = returnSafe(newNumberList[p]);
            console.log(newNumberList[p]+ "   "+state);
            if(state == 'Safe'){
                result++;
                console.log(result)
                p = newNumberList.length;
            }
        }

    }
    output.push(state)
}

function validateIfUnsafe(numbersArray) {
    var arrays = [];
    for (let i = 0; i < numbersArray.length; i++) {
        var newArrays = [];
        for (let j = 0; j < numbersArray.length; j++) {
            if(j!=i){
                newArrays.push(numbersArray[j])
            }
        }
        arrays.push(newArrays)
    }
    return arrays;
}


function returnSafe(numberList) {
    var type = 'Crescente'
    var state = 'Safe';    
    for (let j = 0; j < numberList.length-1; j++) {
        if(numberList[0]-numberList[1] > 0){
            type = 'Decrescente';
             }
        if(numberList[j]-numberList[j+1] == 0){
            state = 'Unsafe';
            
        }
        if(type == 'Crescente' && numberList[j]-numberList[j+1] > 0){
            state = 'Unsafe';
            
        }
        if(type == 'Decrescente' && numberList[j]-numberList[j+1] < 0){
            state = 'Unsafe';
                    }
        if(type == 'Crescente' && numberList[j]-numberList[j+1] < -3){
            state = 'Unsafe';
            
        }
        if(type == 'Decrescente' && numberList[j]-numberList[j+1] > 3){
            state = 'Unsafe';
                    }

    }
    console.log(state)
    return state;
}

console.log(result)