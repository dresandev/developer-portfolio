"use client"

import { useTheme } from "next-themes"
import { styled } from "@linaria/react"

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()
	const isLightMode = theme === "light"
	const oppositeThemeName = isLightMode ? "oscuro" : "claro"

	const handleOnClick = () => {
		const oppositeTheme = isLightMode ? "dark" : "light"
		setTheme(oppositeTheme)
	}

	return (
		<Button
			onClick={handleOnClick}
			title={`Cambiar a modo ${oppositeThemeName}`}
			aria-live="polite"
		>
			<SunAndMoon
				aria-hidden="true"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				strokeLinecap="round"
			>
				<Moon id="moon-mask">
					<rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
					<circle cx="24" cy="10" r="6" fill="black"></circle>
				</Moon>
				<Sun cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></Sun>
				<SunBeams stroke="currentColor" strokeWidth="2">
					<line x1="12" y1="1" x2="12" y2="3"></line>
					<line x1="12" y1="21" x2="12" y2="23"></line>
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
					<line x1="1" y1="12" x2="3" y2="12"></line>
					<line x1="21" y1="12" x2="23" y2="12"></line>
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
				</SunBeams>
			</SunAndMoon>
		</Button>
	)
}

const Button = styled.button`
	--size: 24px;
	inline-size: var(--size);
	block-size: var(--size);
	padding: 0;
	color: var(--color-text-secondary);
	background-color: transparent;
	border: none;
	touch-action: manipulation;
	-webkit-tap-highlight-color: transparent;
	cursor: pointer;
	transition: color 150ms ease;

	&:hover {
		color: var(--color-text);
	}
`

const SunAndMoon = styled.svg`
	inline-size: 100%;
	block-size: 100%;
`

const Moon = styled.mask`
	transform-origin: center;

	html[data-theme="dark"] & circle {
		transform: translate(-7px);

		@supports (cx: 1) {
			transform: translate(0);
			cx: 17;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		circle {
			transition: transform 250ms var(--ease-out-5);
		}

		html[data-theme="dark"] & circle {
			transition-delay: 250ms;
			transition-duration: 500ms;
		}

		@supports (cx: 1) {
			circle {
				transition: cx 250ms var(--ease-out-5);
			}
		}
	}
`

const Sun = styled.circle`
	transform-origin: center;

	html[data-theme="dark"] & {
		transform: scale(1.75);
	}

	@media (prefers-reduced-motion: no-preference) {
		transition: transform 500ms var(--ease-elastic-3);

		html[data-theme="dark"] & {
			transform: scale(1.75);
			transition-timing-function: var(--ease-3);
			transition-duration: 250ms;
		}
	}
`

const SunBeams = styled.g`
	transform-origin: center;

	html[data-theme="dark"] & {
		opacity: 0;
	}

	@media (prefers-reduced-motion: no-preference) {
		transition: transform 500ms var(--ease-elastic-4), opacity 500ms var(--ease-3);

		html[data-theme="dark"] & {
			transform: rotate(-25deg);
			transition-duration: 150ms;
		}
	}
`
