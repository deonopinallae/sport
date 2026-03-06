import { ENDPOINTS } from '@/endpoints'
import { request } from '@/shared/lib/request'
import type { TariffDto } from '../model/price-card-types'

type LoadTariffsParams = {
	setIsTariffsLoading: (value: boolean) => void
	setTariffs: (value: TariffDto[]) => void
}

const fallbackTariffs: TariffDto[] = [
	{
		id: 'fallback-best',
		period: 'Навсегда',
		price: 5990,
		full_price: 18990,
		is_best: true,
		text: 'Для тех, кто хочет всегда быть в форме и поддерживать здоровье',
	},
	{
		id: 'fallback-3m',
		period: '3 месяца',
		price: 1990,
		full_price: 3990,
		is_best: false,
		text: 'Привести тело в порядок',
	},
	{
		id: 'fallback-1m',
		period: '1 месяц',
		price: 1290,
		full_price: 2190,
		is_best: false,
		text: 'Поддерживать регулярные тренировки',
	},
	{
		id: 'fallback-1w',
		period: '1 неделя',
		price: 690,
		full_price: 990,
		is_best: false,
		text: 'Попробовать и оценить результат',
	},
]

export const fetchTariffs = async ({
	setIsTariffsLoading,
	setTariffs,
}: LoadTariffsParams) => {
	setIsTariffsLoading(true)

	try {
		const data = await request<TariffDto[]>(ENDPOINTS.getTariffs)

		const sortedData = [...data].reverse().sort((first, second) => {
			if (first.is_best !== second.is_best) {
				return Number(second.is_best) - Number(first.is_best)
			}

			return 0
		})

		setTariffs(sortedData)
	} catch {
		console.error('Failed to load tariffs, using fallback data')
		setTariffs(fallbackTariffs)
	} finally {
		setIsTariffsLoading(false)
	}
}
