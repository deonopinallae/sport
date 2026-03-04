import { PriceCard } from '@/entities/price-card'

export default function RatePage() {
	return (
		<section className="container my-[3rem] md:px-[3.25rem] md:pt-[2.75rem]">
			<div>
				<h2 className="inline">Выбери подходящий для себя </h2>
				<h2 className="inline text-[var(--rate-accent-color)]">тариф</h2>
			</div>

			<div className="mt-[2rem] grid grid-cols-1 gap-[0.875rem] md:mt-[2.0625rem] md:grid-cols-3">
				<PriceCard
					period="Навсегда"
					price={5990}
					fullPrice={18990}
					text="Для тех, кто хочет всегда быть в форме и поддерживать здоровье"
					mobileText="Всегда быть в форме"
					discount={70}
					isHit
					className="md:col-span-3"
				/>

				<PriceCard
					period="3 месяца"
					price={1990}
					fullPrice={3990}
					text="Привести тело в порядок"
					discount={50}
				/>

				<PriceCard
					period="1 месяц"
					price={990}
					fullPrice={1690}
					text="Чтобы получить первые результаты"
					discount={40}
				/>

				<PriceCard
					period="1 неделя"
					price={690}
					fullPrice={990}
					text="Чтобы просто начать"
					discount={30}
				/>
			</div>
		</section>
	)
}
