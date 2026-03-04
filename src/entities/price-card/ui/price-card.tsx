type PriceCardProps = {
	period: string
	price: number
	fullPrice: number
	text: string
	mobileText?: string
	discount: number
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
	isHit = false,
	className,
}: PriceCardProps) => {
	return (
		<div
			className={`relative flex bg-[#313637] ${
				isHit
					? 'items-center justify-between rounded-[1.25rem] border-[0.125rem] border-[var(--rate-accent-color)] px-[1.875rem] pb-[1.25rem] pt-[1.25rem] md:items-end md:justify-center md:gap-[1rem] md:rounded-[2.125rem] md:pb-[1.625rem] md:pl-[1.1875rem] md:pr-[5rem] md:pt-[1.875rem]'
					: 'items-center justify-between rounded-[1.25rem] border-[0.125rem] border-[#484d4e] px-[1.875rem] pb-[1.25rem] pt-[1.25rem] md:flex-col md:items-center md:gap-[1rem] md:rounded-[2.5rem] md:px-[1.3125rem] md:pb-[1.625rem] md:pt-[4.375rem]'
			} ${className ?? ''}`}
		>
			<div
				className={`absolute flex items-center justify-center overflow-hidden rounded-b-[0.5rem] bg-[var(--rate-danger-color)] px-[0.375rem] py-[0.1875rem] md:px-[0.5rem] md:py-[0.3125rem] ${
					isHit
						? 'right-[3.875rem] top-0 md:left-[3.0625rem] md:right-auto'
						: 'right-[1.875rem] top-0 md:left-[3.0625rem] md:right-auto md:top-[-0.1875rem]'
				}`}
			>
				<span className="text-[1rem] leading-[1.3] md:text-[1.375rem]">
					-{discount}%
				</span>
			</div>

			{isHit ? (
				<span className="absolute right-[0.875rem] top-[0.375rem] text-[1rem] font-medium uppercase leading-[1.3] tracking-[0.03rem] text-[var(--rate-accent-color)] md:right-[1rem] md:top-[0.625rem] md:text-[1.375rem] md:tracking-[0.04125rem]">
					хит!
				</span>
			) : null}

			<div
				className={`flex ${
					isHit
						? 'items-center gap-[3.125rem] md:gap-[2.5rem]'
						: 'items-center gap-[3.125rem] md:flex-col md:items-center md:gap-[2.5rem]'
				}`}
			>
				<div
					className={`flex ${
						isHit
							? 'flex-col items-start gap-[1rem] md:items-center'
							: 'flex-col items-start gap-[1rem] md:items-center md:gap-[1.875rem]'
					}`}
				>
					<p className="text-[1.125rem] font-medium leading-[1.2] md:text-[1.625rem]">
						{period}
					</p>

					<div className="flex flex-col items-end">
						<p
							className={`text-[2.125rem] font-semibold leading-none md:text-[3.125rem] ${
								isHit ? 'text-[var(--rate-accent-color)]' : ''
							}`}
						>
							{formatPrice(price)}
						</p>
						<p className="text-[1.125rem] font-medium leading-[1.2] text-[var(--rate-font-subtle-color)] line-through md:text-[1.625rem]">
							{formatPrice(fullPrice)}
						</p>
					</div>
				</div>

				{isHit && mobileText ? (
					<>
						<p className="w-[6.5rem] text-[0.875rem] leading-[1.3] text-[var(--rate-accent-color)] md:hidden">
							{mobileText}
						</p>
						<p className="hidden w-[20.5rem] text-[1rem] leading-[1.3] text-[var(--rate-accent-color)] md:block">
							{text}
						</p>
					</>
				) : (
					<p
						className={`text-[0.875rem] leading-[1.3] md:text-[1rem] ${
							isHit ? 'text-[var(--rate-accent-color)]' : ''
						} ${isHit ? 'w-[6.5rem] md:w-[20.5rem]' : 'w-[6.9375rem] md:w-[12.75rem]'}`}
					>
						{text}
					</p>
				)}
			</div>
		</div>
	)
}
