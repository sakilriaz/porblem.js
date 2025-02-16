//  shirt = 500;
//  pants = 800;
//  shoes = 1200;

function garmentPrice(shirt,pants,shoes){
    const perShirt = 500;
    const perPants = 800;
    const perShoes = 1200;

const shirtPrice = perShirt*shirt;
const pantsPrice = perPants*pants;
const shoesPrice = perShoes*shoes;

const totalPrice = shirtPrice + pantsPrice + shoesPrice;

return totalPrice;

}
const price = garmentPrice(2,3,1);
console.log('Total pay amount is TK:',price)