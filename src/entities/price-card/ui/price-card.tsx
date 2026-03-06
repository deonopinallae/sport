import { PriceCardProps } from '../model/price-card-types'
import styles from './styles.module.scss'

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
	const activePriceColor = isHit ? styles.priceAccent : ''

	return (
		<div
			className={`${styles.card} ${
				isHit ? styles.cardHit : styles.cardDefault
			} ${className ?? ''}`}
		>
			{hasDiscount ? (
				<div
					className={`${styles.discountBadge} ${
						isHit ? styles.discountBadgeHit : styles.discountBadgeDefault
					} ${
						isDiscountActive
							? 'opacity-100 translate-y-0'
							: 'pointer-events-none -translate-y-1 opacity-0'
					}`}
				>
					<span className={styles.discountText}>-{discount}%</span>
				</div>
			) : null}

			{isHit ? <span className={styles.hitLabel}>хит!</span> : null}

			<div
				className={`${styles.contentRow} ${
					isHit ? '' : styles.contentRowDefault
				}`}
			>
				<div
					className={`${styles.textColumn} ${
						isHit ? '' : styles.textColumnDefault
					}`}
				>
					<p className={styles.period}>{period}</p>

					<div className={styles.priceColumn}>
						<div className={isDiscountActive ? styles.priceTrack : ''}>
							<p
								className={`${styles.currentPrice} ${activePriceColor} ${
									isDiscountActive
										? 'translate-y-0 opacity-100'
										: 'pointer-events-none -translate-y-1 opacity-0'
								}`}
							>
								{formatPrice(price)}
							</p>
							<p
								className={`${styles.fullPrice} ${activePriceColor} ${
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
								className={`${styles.oldPrice} ${
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
						<p className={styles.mobileHitText}>{mobileText}</p>
						<p className={styles.desktopHitText}>{text}</p>
					</>
				) : (
					<p
						className={`${styles.description} ${
							isHit ? styles.descriptionHit : styles.descriptionDefault
						}`}
					>
						{text}
					</p>
				)}
			</div>
		</div>
	)
}
