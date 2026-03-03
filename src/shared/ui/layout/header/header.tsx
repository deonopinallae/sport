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
	const timerColor = isDanger ? 'text-[#FD5656]' : 'text-[#FFBB00]'

	return (
		<header
			className={`sticky top-0 z-50 flex w-full flex-col items-center gap-1 bg-[#1D5B43] px-4 py-2 ${className ?? ''}`}
		>
			<p className="text-center text-[18px] font-semibold leading-[1.3] text-white md:text-[24px]">
				Успейте открыть пробную неделю
			</p>

			<div className={`flex items-center justify-center gap-2 ${timerColor}`}>
				<StarIcon className="h-[14px] w-[14px]" />

				<div className="flex items-center gap-[6px] text-[32px] font-bold uppercase leading-none md:text-[40px]">
					<span className="leading-[1.1]">{pad(minutes)}</span>
					<span className="leading-[1.3]">:</span>
					<span className="leading-[1.1]">{pad(seconds)}</span>
				</div>

				<StarIcon className="h-[14px] w-[14px]" />
			</div>
		</header>
	)
}

