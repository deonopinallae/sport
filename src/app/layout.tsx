import type { Metadata } from 'next'
import { Lexend_Deca } from 'next/font/google'
import '@/styles/styles.scss'

const lexendDeca = Lexend_Deca({
	subsets: ['latin'],
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
			<body className={`${lexendDeca.className} antialiased`}>{children}</body>
		</html>
	)
}
