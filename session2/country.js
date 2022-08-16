const args = require("minimist")(process.argv.slice(2));
// console.log(args);

console.log(`Name: ${args.name}`);
console.log(`Capital city: ${args.capital}`);
console.log(`Population: ${args.population}`);
