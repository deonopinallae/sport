'use client'

import { useEffect, useState } from 'react'
import { Form } from '@/entities/form'
import { PriceCard } from '@/entities/price-card'
import { getDiscount } from '@/entities/price-card/lib/get-discount'
import { fetchTariffs } from '@/entities/price-card/lib/fetch-tariffs'
import type { TariffDto } from '@/entities/price-card/model/price-card-types'
import { useOfferTimerStore } from '@/features/offer-timer/model/offer-timer-store'
import { Loader } from '@/shared/ui/loader'

const athleteImageUrl = '/freepik-export-20240531103402atHS%2012.png'

export default function RatePage() {
	const [tariffs, setTariffs] = useState<TariffDto[]>([])
	const [isTariffsLoading, setIsTariffsLoading] = useState(true)
	const remainingSeconds = useOfferTimerStore((state) => state.remainingSeconds)
	const isOfferExpired = remainingSeconds <= 0

	useEffect(() => {
		void fetchTariffs({ setIsTariffsLoading, setTariffs })
	}, [])

	return (
		<section className="container my-[clamp(2rem,2.5vw,3rem)] md:px-[3.25rem] md:pt-[2.75rem]">
			<div className="mx-auto w-full max-w-[76rem] lg:ml-[26.5rem] lg:max-w-[46.75rem]">
				<h2 className="inline">Выбери подходящий для себя </h2>
				<h2 className="inline text-[var(--rate-accent-color)]">тариф</h2>
			</div>

			<div className="mx-auto mt-[clamp(1.5rem,2vw,2.0625rem)] flex w-full max-w-[76rem] flex-col gap-[clamp(1rem,2vw,2rem)] lg:flex-row lg:items-end lg:gap-[5.5rem]">
				<div className="relative mx-auto w-[6.206rem] min-[375px]:w-[7.756rem] lg:mx-0 lg:w-[23.795rem]">
					<img src={athleteImageUrl} alt="Атлет" className="w-full" />
				</div>

				<div className="w-full lg:w-[46.75rem]">
					{isTariffsLoading ? (
						<Loader />
					) : (
						<div className="grid grid-cols-1 gap-[0.875rem] lg:grid-cols-3">
							{tariffs.map((tariff) => {
								return (
									<PriceCard
										key={tariff.id}
										period={tariff.period}
										price={tariff.price}
										fullPrice={tariff.full_price}
										text={tariff.text}
										mobileText={
											tariff.is_best
												? 'Всегда быть в форме'
												: undefined
										}
										discount={getDiscount(
											tariff.price,
											tariff.full_price,
										)}
										isOfferExpired={isOfferExpired}
										isHit={tariff.is_best}
										className={
											tariff.is_best ? 'lg:col-span-3' : undefined
										}
									/>
								)
							})}
						</div>
					)}

					<div className="mt-[1rem] flex w-full items-start gap-[0.5rem] rounded-[1.25rem] bg-[var(--rate-attention-bg-color)] px-[clamp(0.75rem,1.6vw,1.25rem)] py-[1.125rem] lg:mt-[1.25rem] lg:max-w-[31.1875rem]">
						<span className="mt-[0.125rem] text-[1.625rem] leading-none text-[var(--rate-accent-color)]">
							!
						</span>
						<p className="w-full text-[1rem] leading-[1.3] lg:max-w-[26.6875rem]">
							Следуя плану на 3 месяца и более, люди получают в 2 раза
							лучший результат, чем за 1 месяц
						</p>
					</div>

					<Form />
				</div>
			</div>

			<div className="mx-auto mt-[clamp(1.5rem,3vw,4.125rem)] w-full max-w-[76rem] rounded-[1.25rem] border border-[#484d4e] p-[clamp(0.75rem,1.2vw,1.25rem)] lg:rounded-[1.875rem]">
				<div className="inline-flex items-center justify-center rounded-[1.875rem] border border-[var(--rate-success-color)] bg-[var(--rate-attention-bg-color)] px-[clamp(1.125rem,1.8vw,1.875rem)] py-[clamp(0.625rem,1.1vw,1rem)]">
					<p className="text-[clamp(1.1875rem,2vw,1.75rem)] font-medium leading-[1.2] text-[var(--rate-success-color)]">
						гарантия возврата 30 дней
					</p>
				</div>

				<p className="mt-[clamp(0.75rem,2vw,1.875rem)] text-[clamp(1rem,1.7vw,1.5rem)] leading-[1.3] text-[var(--rate-font-soft-color)]">
					Мы уверены, что наш план сработает для тебя и ты увидишь видимые
					результаты уже через 4 недели! Мы даже готовы полностью вернуть твои
					деньги в течение 30 дней с момента покупки, если ты не получишь
					видимых результатов.
				</p>
			</div>
		</section>
	)
}
