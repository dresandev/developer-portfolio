import { SVGProps } from "react"

export const NextJsLogo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={50}
		height={50}
		viewBox="0 0 50 50"
		fill="none"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				fill="currentColor"
				d="M38.885 45.788A24.875 24.875 0 0 1 25 50C11.202 50 0 38.798 0 25S11.202 0 25 0s25 11.202 25 25c0 7.465-3.28 14.169-8.473 18.752L19.207 15H15v19.992h3.365v-15.72l20.52 26.516ZM31.944 28.01l3.333 4.294V15h-3.333v13.01Z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="currentColor" d="M0 0h50v50H0z" />
			</clipPath>
		</defs>
	</svg>
)
