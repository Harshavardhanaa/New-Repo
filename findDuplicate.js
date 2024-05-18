function FindDuplicate(arr){

    let result = []

    for ( let i= 0; i<arr.length; i++){
        if( arr.indexOf(arr[i]) != i && !result.includes(arr[i]) ){

            result.push(arr[i])
        }
    }
    return result
}

console.log(FindDuplicate([10,2,3,4,5,6,1,2,3,4,5,7,8]))