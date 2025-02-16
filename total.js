const numbers = [300, 100, 700, 1200];


const products = [
    { name: 'shampoo', price: 300 },
    { name: 'chiruni', price: 100 },
    { name: 'shirt', price: 700 },
    { name: 'pant', price: 1200 }
]

function totalPrice(products){
    let sum = 0 ;
    for(const product of products){
        sum = sum + product.price;
    }return sum;
} 
const price = totalPrice(products);
console.log('total shopping is Tk:',price)