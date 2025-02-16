const heights = [65, 66, 68, 72, 78, 60, 65, 66];

function minHeight(numbers){
    let min = numbers[0];
    for(num of numbers){
        if(num<min){
            min=num;
        }
    } return min;
}

const min = minHeight(heights);
console.log('min height is:', min)
