type PriceCardProps = {
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

const formatPrice = (value: number) => `${value.toLocaleString('ru-RU')} ₽`

export const PriceCard = ({
	period,
	price,
	fullPrice,
	text,
	mobileText,
	discount,
	isOfferExpired = false,
	isHit = false,
	className,
}: PriceCardProps) => {
	const hasDiscount = discount > 0 && fullPrice > price
	const isDiscountActive = hasDiscount && !isOfferExpired
	const activePriceColor = isHit ? 'text-[var(--rate-accent-color)]' : ''

	return (
		<div
			className={`relative flex bg-[#313637] ${
				isHit
					? 'h-[7.375rem] items-center justify-between rounded-[1.25rem] border-[0.125rem] border-[var(--rate-accent-color)] px-[1.25rem] pb-[1.25rem] pt-[1.25rem] min-[375px]:h-[8.1875rem] min-[375px]:pl-[1.875rem] min-[375px]:pr-[1rem] lg:h-[11.875rem] lg:items-end lg:justify-center lg:gap-[1rem] lg:rounded-[2.125rem] lg:pb-[1.625rem] lg:pl-[1.1875rem] lg:pr-[5rem] lg:pt-[1.875rem]'
					: 'h-[7.375rem] items-center justify-between rounded-[1.25rem] border-[0.125rem] border-[#484d4e] px-[1.25rem] pb-[1.25rem] pt-[1.25rem] min-[375px]:h-[8.1875rem] min-[375px]:pl-[1.875rem] min-[375px]:pr-[1rem] lg:h-[20.9375rem] lg:flex-col lg:items-center lg:gap-[1rem] lg:rounded-[2.5rem] lg:px-[1.3125rem] lg:pb-[1.625rem] lg:pt-[4.375rem]'
			} ${className ?? ''}`}
		>
			{hasDiscount ? (
				<div
					className={`absolute flex items-center justify-center overflow-hidden rounded-b-[0.5rem] bg-[var(--rate-danger-color)] px-[0.375rem] py-[0.1875rem] transition-all duration-500 min-[375px]:px-[0.375rem] min-[375px]:py-[0.1875rem] lg:px-[0.5rem] lg:py-[0.3125rem] ${
						isDiscountActive
							? 'opacity-100 translate-y-0'
							: 'pointer-events-none -translate-y-1 opacity-0'
					} ${
						isHit
							? 'right-[12.25rem] top-0 min-[375px]:right-[14.5625rem] lg:left-[3.125rem] lg:right-auto'
							: 'right-[1.75rem] top-0 min-[375px]:right-[1.875rem] lg:left-[3.125rem] lg:right-auto lg:top-[-0.1875rem]'
					}`}
				>
					<span className="text-[0.8125rem] leading-[1.3] min-[375px]:text-[1rem] lg:text-[1.375rem]">
						-{discount}%
					</span>
				</div>
			) : null}

			{isHit ? (
				<span className="absolute right-[0.875rem] top-[0.375rem] text-[0.8125rem] font-medium uppercase leading-[1.3] tracking-[0.024375rem] text-[var(--rate-accent-color)] min-[375px]:right-[0.875rem] min-[375px]:text-[1rem] min-[375px]:tracking-[0.03rem] lg:right-[1rem] lg:top-[0.625rem] lg:text-[1.375rem] lg:tracking-[0.04125rem]">
					хит!
				</span>
			) : null}

			<div
				className={`flex ${
					isHit
						? 'items-center gap-[1.875rem] min-[375px]:gap-[3.125rem] lg:gap-[2.5rem]'
						: 'items-center gap-[1.875rem] min-[375px]:gap-[3.125rem] lg:flex-col lg:items-center lg:gap-[2.5rem]'
				}`}
			>
				<div
					className={`flex ${
						isHit
							? 'flex-col items-start gap-[0.75rem] min-[375px]:gap-[1rem] lg:items-center'
							: 'flex-col items-start gap-[0.75rem] min-[375px]:gap-[1rem] lg:items-center lg:gap-[1.875rem]'
					}`}
				>
					<p className="text-[1rem] font-medium leading-[1.2] min-[375px]:text-[1.125rem] lg:text-[1.625rem]">
						{period}
					</p>

					<div className="flex flex-col items-end">
						<div className="relative h-[1.875rem] min-w-[6.6875rem] min-[375px]:h-[2.125rem] min-[375px]:min-w-[7.5625rem] lg:h-[3.125rem] lg:min-w-[10.5rem]">
							<p
								className={`absolute right-0 top-0 text-[1.875rem] font-semibold leading-none transition-all duration-500 min-[375px]:text-[2.125rem] lg:text-[3.125rem] ${activePriceColor} ${
									isDiscountActive
										? 'translate-y-0 opacity-100'
										: 'pointer-events-none -translate-y-1 opacity-0'
								}`}
							>
								{formatPrice(price)}
							</p>
							<p
								className={`absolute right-0 top-0 text-[1.875rem] font-semibold leading-none transition-all duration-500 min-[375px]:text-[2.125rem] lg:text-[3.125rem] ${activePriceColor} ${
									isDiscountActive
										? 'pointer-events-none translate-y-1 opacity-0'
										: 'translate-y-0 opacity-100'
								}`}
							>
								{formatPrice(fullPrice)}
							</p>
						</div>

						{hasDiscount ? (
							<p
								className={`text-[0.875rem] font-medium leading-[1.2] text-[var(--rate-font-subtle-color)] line-through transition-all duration-500 min-[375px]:text-[1rem] lg:text-[1.5rem] ${
									isDiscountActive
										? 'max-h-[2rem] opacity-100'
										: 'max-h-0 overflow-hidden opacity-0'
								}`}
							>
								{formatPrice(fullPrice)}
							</p>
						) : null}
					</div>
				</div>

				{isHit && mobileText ? (
					<>
						<p className="w-[6.5rem] text-[0.875rem] leading-[1.3] text-[var(--rate-accent-color)] lg:hidden">
							{mobileText}
						</p>
						<p className="hidden w-[20.5rem] text-[1rem] leading-[1.3] text-[var(--rate-accent-color)] lg:block">
							{text}
						</p>
					</>
				) : (
					<p
						className={`text-[0.875rem] leading-[1.3] min-[375px]:text-[0.875rem] lg:text-[1rem] ${
							isHit ? 'text-[var(--rate-accent-color)]' : ''
						} ${
							isHit
								? 'w-[6.5rem] lg:w-[20.5rem]'
								: 'w-[6.9375rem] min-[375px]:w-[6.9375rem] lg:w-[12.75rem]'
						}`}
					>
						{text}
					</p>
				)}
			</div>
		</div>
	)
}
