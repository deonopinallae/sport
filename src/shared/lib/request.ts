import { ErrorResponse } from '@/types/error'

type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE'

export const request = async <T, D = undefined>(
	url: string,
	method: HttpMethod = 'GET',
	data?: D,
): Promise<T> => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: data ? JSON.stringify(data) : undefined,
	})

	if (!res.ok) {
		const errorData: ErrorResponse = await res.json()
		throw errorData
	}

	return res.json() as Promise<T>
}
