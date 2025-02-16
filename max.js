// https://github.com/sakilriaz/porblem.js

// if(tim>jim && tim>kim){
//     console.log('tim is winner')
// }
// else if(jim>tim && jim>kim){
//     console.log('jim is winner')
// }
// else{console.log('kim is winner')}
const tim = 99;
const jim = 46;
const kim =98;
function getMax(tim,jim,kim){
    if(tim>jim && tim>kim) {
        return tim;    }
    else if(jim>tim && jim>kim)
    { return jim;}
    else{ return kim;}
}
const max = getMax(99,46,98)
console.log('highest mark is :',max)

const maximum = Math.max(33,66,7,9,98,67,89,30)
console.log('max using Math.max:',maximum)