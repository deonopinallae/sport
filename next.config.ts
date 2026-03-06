import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactCompiler: true,
	output: 'export',
	basePath: '/sport',
	assetPrefix: '/sport/',
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
}

export default nextConfig
