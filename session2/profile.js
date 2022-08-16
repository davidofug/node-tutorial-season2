if (process.argv.length <= 2) {
	console.log(`Profile information is required!`);
	console.log(process.argv);
} else {
	const profile = process.argv.slice(2);

	// console.log(p rofile);

	profile.forEach((item) => {
		// console.log(item.replace(/"/g, ""));
		// const key = item.split("=")[0];
		const [key, value] = item.split("=");
		if (key === "name") {
			console.log(`Name: ${value}`);
		}
	});
}
