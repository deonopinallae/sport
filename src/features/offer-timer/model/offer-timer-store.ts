import { createStore } from '@/shared/lib/create-store'

type OfferTimerState = {
	deadline: number | null
	remainingSeconds: number
	initTimer: () => void
	tick: () => void
}

const TIMER_DURATION_MS = 2 * 60 * 1000
const DEFAULT_SECONDS = 2 * 60

const getRemainingSeconds = (deadline: number) => {
	const remainingMs = Math.max(0, deadline - Date.now())

	return Math.ceil(remainingMs / 1000)
}

export const useOfferTimerStore = createStore<OfferTimerState>(
	(set, get) => ({
		deadline: null,
		remainingSeconds: DEFAULT_SECONDS,
		initTimer: () => {
			const currentDeadline = get().deadline

			const deadline =
				currentDeadline && Number.isFinite(currentDeadline)
					? currentDeadline
					: Date.now() + TIMER_DURATION_MS

			set({
				deadline,
				remainingSeconds: getRemainingSeconds(deadline),
			})
		},
		tick: () => {
			const { deadline } = get()

			if (!deadline) {
				return
			}

			set({
				remainingSeconds: getRemainingSeconds(deadline),
			})
		},
	}),
	{
		persist: {
			name: 'rate-offer-timer-store',
			partialize: (state) => ({ deadline: state.deadline }),
		},
	},
)
