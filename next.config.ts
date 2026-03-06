import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	output: 'export',
	basePath: '/sport',
	assetPrefix: '/sport/',
	images: {
		unoptimized: true,
	},
	env: {
		NEXT_PUBLIC_BASE_PATH: '/sport',
	},
	trailingSlash: true,
}

export default nextConfig
