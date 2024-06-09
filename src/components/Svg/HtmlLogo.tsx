import { SVGProps } from "react"

export const HtmlLogo = (props: SVGProps<SVGSVGElement>) => (
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
			d="M3.125 0h43.75l-3.98 44.923L24.953 50 7.11 44.92 3.125 0Zm14.648 20.313-.483-5.663 20.956.006.479-5.462-27.45-.007 1.454 16.688h19.013l-.68 7.138L25 34.688 18.844 33l-.392-4.396h-5.435l.687 8.69L25 40.314l11.206-3.006 1.55-16.993H17.773v-.003Z"
		/>
	</svg>
)
