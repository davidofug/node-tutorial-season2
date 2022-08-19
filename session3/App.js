/* const expenses = require("./Expenses");

console.log(expenses.expenses);
console.log(expenses.total); */

const { expenses } = require("./Expenses");
const Calculate = require("./Calculate");

const { getTotal } = Calculate;

const total = getTotal(expenses);

console.log(total);
