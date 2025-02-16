const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]

function cartPrice(products){
    let total = 0 ;
    for(const product of products){
        const productSum = product.price * product.quantity;
         total = total + productSum;
    } return total;
}
// function cartPrice(products){
//     let total = 0 ;
//     for(const product of products){
//          total = total + product.price * product.quantity;
//     } return total;
// }

const price = cartPrice(products);
console.log('Pay Tk:',price)
