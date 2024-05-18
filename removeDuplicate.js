function RemoveDuplicate(arr){

    let result = []

    for (let i=0; i<arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result

}

console.log(RemoveDuplicate([10,10,20,30,30,50,12]))