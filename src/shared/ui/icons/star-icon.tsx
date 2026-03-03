import type { SVGProps } from 'react'

type StarIconProps = SVGProps<SVGSVGElement>

export const StarIcon = ({ className, ...props }: StarIconProps) => {
	return (
		<svg
			aria-hidden="true"
			viewBox="0 0 14 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			{...props}
		>
			<path
				d="M7 0L8.76923 5.23077L14 7L8.76923 8.76923L7 14L5.23077 8.76923L0 7L5.23077 5.23077L7 0Z"
				fill="currentColor"
			/>
		</svg>
	)
}
