const sum = (num1, num2) => {
	if (typeof num1 !== "number" || typeof num2 !== "number") {
		return "Invalid Input";
	}
	return num1 + num2;
};

let output = sum(1, 2);

// console.log(output);

output = sum("David", 3);

console.log(output);
