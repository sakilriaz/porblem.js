// Task -1:
// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

let low = heights2[0];
for(const num of heights2){
    // console.log(num)
    if(num<low){low=num;}
} console.log(low)