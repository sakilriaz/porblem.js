// Task-3:
// Your task is to calculate the total budget required to buy electronics:

    // laptop = 35000 tk
    // tablet = 15000 tk
    // mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptopQuantity,tabletQuantity,mobileQuantity){
    let laptopPrice=35000;
    let tabletPrice=15000;
    let mobilePrice=20000;
    const totalLaptopPrice = laptopPrice * laptopQuantity;
    const totalTabletPrice = tabletPrice * tabletQuantity ;
    const totalMobilePrice = mobilePrice * mobileQuantity ;
    const totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
    return totalPrice;
}
const price = calculateElectronicsBudget(1,0,1);
console.log('total pay is Tk:', price)