'use client'

import { StarIcon } from '@/shared/ui/icons'

type HeaderProps = {
	minutes?: number
	seconds?: number
	isDanger?: boolean
	className?: string
}

const pad = (value: number) => String(Math.max(0, value)).padStart(2, '0')

export const Header = ({
	minutes = 15,
	seconds = 59,
	isDanger = false,
	className,
}: HeaderProps) => {
	const timerColor = isDanger
		? 'text-[var(--header-timer-danger-color)]'
		: 'text-[var(--header-timer-color)]'

	return (
		<header
			className={`sticky top-0 z-50 flex w-full flex-col items-center gap-[0.25rem] bg-[var(--header-bg-color)] px-[1rem] py-[0.5rem] text-[var(--header-font-color)] ${className ?? ''}`}
		>
			<p className="text-center text-[1.125rem] font-semibold leading-[1.3] md:text-[1.5rem]">
				Успейте открыть пробную неделю
			</p>

			<div
				className={`flex items-center justify-center gap-[0.5rem] ${timerColor}`}
			>
				<StarIcon className="h-[0.875rem] w-[0.875rem]" />

				<div className="flex items-center gap-[0.375rem] text-[2rem] font-bold uppercase leading-none md:text-[2.5rem]">
					<span className="leading-[1.1]">{pad(minutes)}</span>
					<span className="leading-[1.3]">:</span>
					<span className="leading-[1.1]">{pad(seconds)}</span>
				</div>

				<StarIcon className="h-[0.875rem] w-[0.875rem]" />
			</div>
		</header>
	)
}
