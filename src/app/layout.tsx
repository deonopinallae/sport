import type { Metadata } from 'next'
import { Montserrat, Raleway } from 'next/font/google'
import '@/styles/global.scss'
import { OfferTimer } from '@/features/offer-timer/ui/offer-timer'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const raleway = Raleway({
	subsets: ['latin'],
	variable: '--font-raleway',
})

export const metadata: Metadata = {
	title: { template: '%s ', default: '' },
	description: '',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${montserrat.className} ${montserrat.variable} ${raleway.variable} antialiased`}
			>
				<OfferTimer />
				{children}
			</body>
		</html>
	)
}
