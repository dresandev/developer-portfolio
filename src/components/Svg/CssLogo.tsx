import { SVGProps } from "react"

export const CssLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={50}
		height={50}
		viewBox="0 0 50 50"
		fill="none"
		{...props}
	>
		<path
			fill="currentColor"
			d="M3.125 0h43.75l-3.98 44.923L24.953 50 7.108 44.92 3.125 0Zm35.604 9.194-27.458-.007.444 5.463 21.093.004-.53 5.659H18.443l.5 5.36h12.879l-.763 7.34-6.062 1.675L18.84 33l-.392-4.396H13.01l.605 8.031L25 40.183l11.194-3.187 2.535-27.802Z"
		/>
	</svg>
)
