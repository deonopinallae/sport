'use client'

import { useEffect } from 'react'
import { Header } from '@/shared/ui/layout/header/header'
import { useOfferTimerStore } from '../model/offer-timer-store'

type OfferTimerProps = {
	className?: string
}

export const OfferTimer = ({ className }: OfferTimerProps) => {
	const remainingSeconds = useOfferTimerStore((state) => state.remainingSeconds)
	const initTimer = useOfferTimerStore((state) => state.initTimer)
	const tick = useOfferTimerStore((state) => state.tick)

	useEffect(() => {
		initTimer()

		const intervalId = window.setInterval(() => {
			tick()
		}, 1000)

		return () => {
			window.clearInterval(intervalId)
		}
	}, [initTimer, tick])

	const minutes = Math.floor(remainingSeconds / 60)
	const seconds = remainingSeconds % 60
	const isDanger = remainingSeconds <= 30

	return (
		<Header
			className={className}
			minutes={minutes}
			seconds={seconds}
			isDanger={isDanger}
		/>
	)
}
