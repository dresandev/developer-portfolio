import { SVGProps } from "react"

export const JavascriptLogo = (props: SVGProps<SVGSVGElement>) => (
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
				d="M0 0h50v50H0V0Zm45.904 38.075c-.364-2.281-1.85-4.198-6.256-5.985-1.533-.72-3.238-1.22-3.744-2.375-.19-.688-.219-1.063-.096-1.47.313-1.345 1.907-1.75 3.157-1.374.812.25 1.562.875 2.033 1.875 2.154-1.409 2.154-1.409 3.656-2.344-.562-.875-.842-1.252-1.22-1.625-1.313-1.469-3.061-2.219-5.905-2.154l-1.469.185c-1.408.344-2.75 1.094-3.562 2.094-2.375 2.69-1.69 7.377 1.185 9.315 2.844 2.125 7.002 2.591 7.534 4.593.5 2.438-1.813 3.22-4.096 2.938-1.69-.375-2.625-1.22-3.656-2.783l-3.813 2.19c.438 1 .938 1.435 1.688 2.31 3.625 3.658 12.687 3.47 14.314-2.092.06-.188.5-1.469.154-3.438l.096.14ZM27.19 22.981h-4.684c0 4.038-.018 8.05-.018 12.094 0 2.567.13 4.923-.288 5.648-.688 1.435-2.458 1.252-3.262 1-.825-.408-1.244-.97-1.73-1.781-.13-.22-.229-.409-.264-.409l-3.802 2.344c.635 1.313 1.562 2.442 2.758 3.16 1.781 1.063 4.175 1.407 6.681.844 1.631-.47 3.038-1.44 3.773-2.94 1.063-1.937.838-4.312.827-6.97.025-4.28 0-8.56 0-12.873l.009-.117Z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="currentColor" d="M0 0h50v50H0z" />
			</clipPath>
		</defs>
	</svg>
)