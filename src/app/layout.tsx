import type { Metadata } from 'next'
import { Montserrat, Raleway } from 'next/font/google'
import '@/styles/styles.scss'
import { Header } from '@/shared/ui/layout/header/header'

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
				<Header />
				{children}
			</body>
		</html>
	)
}
