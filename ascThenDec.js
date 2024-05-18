
let arr = [1,2,3,4,5,6,7,8,2,4,5,12,46,]
    let evenNumbers = arr.filter(function(ele){
        return ele % 2 == 0     
    })
    evenNumbers.sort((a,b)=> a - b)

    let oddNumbers = arr.filter(function(ele){
        return ele % 2 != 0
    })
    oddNumbers.sort((a,b) => b - a)

    let result = evenNumbers.concat(oddNumbers)

    console.log(result)
