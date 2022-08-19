const getTotal = (items) => {
	return items.reduce((total, item) => {
		return total + item.cost;
	}, 0);
};

exports.getTotal = getTotal;
