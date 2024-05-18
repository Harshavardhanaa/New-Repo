let shoppingCart = [
    ['apple', 'banana'],
    ['banana', 'orange', 'grapes']
];

let itemsPrices = {
    apple: 2,
    banana: 1,
    orange: 3,
    grapes: 4
};

function totalShoppingCart(cart, prices){

    let totalPrice = 0 

    for ( let i= 0; i<cart.length; i++){
        for ( j=0; j<cart[i].length; j++){
            if(prices[cart[i][j]]){
                totalPrice += prices[cart[i][j]]
            }
            else{
                console.log('item not found')
            }
        }
    }
    return totalPrice
}

console.log(totalShoppingCart(shoppingCart,itemsPrices))