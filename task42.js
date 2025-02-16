const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones) {
    if (phones.length === 0) return 0; // Handle empty array case

    const totalPrice = phones.reduce((sum, phone) => sum + phone.price, 0);
    return totalPrice / phones.length;
}

console.log(findAveragePhonePrice(phones)); // Output: 58333.33

// Explanation:
// Check for an empty array – If there are no phones, return 0 to avoid division by zero.
// Use reduce method – Sum up all phone prices.
// Calculate the average – Divide the total price by the number of phones.
// Return the result – The function outputs the average price.
The reduce() method in JavaScript is used to process an array and reduce it to a single value. In this case, we use it to sum up all phone prices.

Syntax of reduce()
javascript
Copy
Edit
array.reduce((accumulator, currentValue) => {
    return newAccumulatorValue;
}, initialValue);
accumulator → Keeps track of the sum (or result) as the function iterates.
currentValue → Represents the current item in the array.
initialValue → The starting value for accumulator (0 in our case).
Using reduce() to Sum Up Phone Prices
Here’s how we use it in our function:

javascript
Copy
Edit
function findAveragePhonePrice(phones) {
    if (phones.length === 0) return 0; // Handle empty array case

    const totalPrice = phones.reduce((sum, phone) => sum + phone.price, 0);

    return totalPrice / phones.length;
}
Breakdown of reduce():
javascript
Copy
Edit
const totalPrice = phones.reduce((sum, phone) => sum + phone.price, 0);
sum (accumulator) starts at 0 (initial value).
Iterates over each phone object in the phones array.
Adds phone.price to sum in each step.
Finally, reduce() returns the total sum of all phone prices.
Example Execution:
For the array:

javascript
Copy
Edit
[
    { model: "PhoneA", price: 95000 },
    { model: "PhoneB", price: 40000 },
    { model: "PhoneC", price: 26000 }
]
reduce() steps:
0 + 95000 → 95000
95000 + 40000 → 135000
135000 + 26000 → 161000
Final totalPrice = 161000
Why Use reduce()?
✅ Concise – Less code compared to for loops.
✅ Functional Approach – Works well with array transformations.
✅ Immutable – Doesn’t modify the original array.