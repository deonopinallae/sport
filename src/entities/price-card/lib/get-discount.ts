export const getDiscount = (price: number, fullPrice: number) => {
	if (fullPrice <= 0 || fullPrice <= price) {
		return 0
	}

	return Math.round(((fullPrice - price) / fullPrice) * 100)
}
