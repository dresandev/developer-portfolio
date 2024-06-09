import { SVGProps } from "react"

export const MongoDbLogo = (props: SVGProps<SVGSVGElement>) => (
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
				d="M35.819 19.906C33.185 8.281 26.96 4.46 26.292 3c-.584-.82-1.104-1.988-1.532-3-.075 1.031-.114 1.427-1.089 2.467-1.506 1.179-9.246 7.67-9.875 20.875-.587 12.316 8.896 19.656 10.183 20.591l.146.105c.268 1.982.497 3.97.688 5.962h1.002c.237-2.15.591-4.283 1.062-6.396a14.488 14.488 0 0 0 1.771-1.444 23.629 23.629 0 0 0 7.581-17.633c.021-1.696-.214-3.462-.41-4.62ZM24.702 36.98s0-17.273.573-17.27c.444 0 1.021 22.28 1.021 22.28-.794-.093-1.594-3.666-1.594-5.01Z"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="currentColor" d="M0 0h50v50H0z" />
			</clipPath>
		</defs>
	</svg>
)
