type LoaderProps = {
	className?: string
}

export const Loader = ({ className }: LoaderProps) => {
	return (
		<div
			className={`grid grid-cols-1 gap-[0.875rem] lg:grid-cols-3 ${
				className ?? ''
			}`}
		>
			{Array.from({ length: 4 }).map((_, index) => (
				<div
					key={`tariff-skeleton-${index}`}
					className={`animate-pulse rounded-[1.25rem] bg-[#313637] ${
						index === 0
							? 'h-[7.375rem] min-[375px]:h-[8.1875rem] lg:col-span-3 lg:h-[11.875rem]'
							: 'h-[7.375rem] min-[375px]:h-[8.1875rem] lg:h-[20.9375rem]'
					}`}
				/>
			))}
		</div>
	)
}
