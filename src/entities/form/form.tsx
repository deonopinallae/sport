'use client'

import { useState } from 'react'

export const Form = () => {
	const [isPolicyAccepted, setIsPolicyAccepted] = useState(false)

	return (
		<>
			<div className="mt-[1rem] flex items-start gap-[0.75rem] lg:mt-[1.875rem] lg:items-center">
				<button
					type="button"
					role="checkbox"
					aria-checked={isPolicyAccepted}
					aria-label="Согласие с офертой и политикой конфиденциальности"
					onClick={() => setIsPolicyAccepted((value) => !value)}
					className="flex h-[clamp(1.875rem,4.8vw,2rem)] w-[clamp(1.875rem,4.8vw,2rem)] shrink-0 items-center justify-center rounded-[0.25rem] border border-[var(--rate-font-muted-color)]"
				>
					{isPolicyAccepted ? (
						<span className="text-[1.25rem] leading-none text-[var(--rate-accent-color)]">
							✓
						</span>
					) : null}
				</button>
				<p className="w-full text-[clamp(0.875rem,1.8vw,1rem)] leading-[1.1] text-[var(--rate-font-muted-color)] lg:max-w-[37.8125rem]">
					Я согласен с{' '}
					<a href="#" className="underline underline-offset-2">
						офертой рекуррентных платежей
					</a>{' '}
					и{' '}
					<a href="#" className="underline underline-offset-2">
						Политикой конфиденциальности
					</a>
				</p>
			</div>

			<button
				type="button"
				className="mt-[1rem] flex w-full max-w-[22rem] items-center justify-center rounded-[1.25rem] bg-[var(--rate-accent-color)] py-[clamp(1rem,2.6vw,1.25rem)] text-[1.25rem] font-bold leading-[1.3] text-[var(--rate-button-text-color)] lg:mt-[1rem]"
			>
				Купить
			</button>

			<p className="mt-[1rem] w-full max-w-[46rem] text-[clamp(0.75rem,1.6vw,0.875rem)] leading-[1.2] text-[var(--rate-font-muted-color)] lg:mt-[0.875rem]">
				Нажимая кнопку «Купить», Пользователь соглашается на разовое списание
				денежных средств для получения пожизненного доступа к приложению.
				Пользователь соглашается, что данные кредитной/дебетовой карты будут
				сохранены для осуществления покупок дополнительных услуг сервиса в случае
				желания пользователя.
			</p>
		</>
	)
}
