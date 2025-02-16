// Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 11, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salary(input){
    let totalSalary = 0;
    for(const employee of employees){
        // console.log(employee)
       const currentSalary= employee.starting + (employee.experience * employee.increment);
       totalSalary += currentSalary;
    //    console.log(employee.name,currentSalary)
    } return totalSalary;
}
const companySalary= salary(employees);
console.log(companySalary)
