import { ENDPOINTS } from '@/endpoints'
import { request } from '@/shared/lib/request'
import type { TariffDto } from '../model/price-card-types'

type LoadTariffsParams = {
	setIsTariffsLoading: (value: boolean) => void
	setTariffs: (value: TariffDto[]) => void
}

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
	} finally {
		setIsTariffsLoading(false)
	}
}
