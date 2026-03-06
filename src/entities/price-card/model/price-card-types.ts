export type TariffDto = {
	id: string
	period: string
	price: number
	full_price: number
	is_best: boolean
	text: string
}

export type PriceCardProps = {
	period: string
	price: number
	fullPrice: number
	text: string
	mobileText?: string
	discount: number
	isOfferExpired?: boolean
	isHit?: boolean
	className?: string
}
