let number = [10,20,30,40,50,70]
let number1 = [10,20,40,70,80]

    let result = []

    for ( let i=0; i<number.length; i++){
        for (let j=0; j<number1.length; j++){
            if( number[i] == number1[j] && ! result.includes(number[i]))
            result.push(number[i])
        }
    }

    console.log(result)