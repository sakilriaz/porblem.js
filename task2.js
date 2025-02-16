// Task -2:
// Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

let small = heights2[0];
for(let i= 0; i<heights2.length;i++){
    // console.log(heights2[i])
    const element = heights2[i];
    if(element.length<small.length){small=element;}
}console.log(small)