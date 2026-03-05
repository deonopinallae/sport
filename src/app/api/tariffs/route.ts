import { NextResponse } from 'next/server'

const TARIFFS_URL = 'https://t-core.fit-hub.pro/Test/GetTariffs'

export async function GET() {
	try {
		const response = await fetch(TARIFFS_URL, {
			cache: 'no-store',
		})

		if (!response.ok) {
			return NextResponse.json(
				{ message: 'Failed to fetch tariffs' },
				{ status: response.status },
			)
		}

		const data = await response.json()

		return NextResponse.json(data)
	} catch {
		return NextResponse.json({ message: 'Failed to fetch tariffs' }, { status: 500 })
	}
}
