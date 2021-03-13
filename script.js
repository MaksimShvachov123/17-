var result = Number(prompt("Яка повинна бути висота у ялинки? = ?"));
console.log('res: ' + result)

switch(result) {
    case 0:
        console.log('довжина повинна бути представлена позитивним числом');
        break;
    case 1:
        console.log('довжина занадто маленька');
        break;
    ifelse
        console.log(result)     
}

function drawChristmasTree (height){
    for (let i=1; i <= height; i++){
        let result = "";
        for(let j=i; j<height; j++){
            result = result + " "
        }
        for(let x = 0; x<(2*i-1); x++){
            result = result + "*"
        }
        console.log(result)
    }
}

drawChristmasTree(9)