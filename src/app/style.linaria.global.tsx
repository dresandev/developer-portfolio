import { css } from "@linaria/core"

export const globals = css`
	:global() {
		*,
		*::before,
		*::after {
			box-sizing: border-box;
		}

		* {
			margin: 0;
		}

		body {
			line-height: 1.5;
			-webkit-font-smoothing: antialiased;
		}

		img,
		video,
		svg {
			display: block;
			max-inline-size: 100%;
		}

		input,
		button,
		textarea,
		select {
			font: inherit;
		}

		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			overflow-wrap: break-word;
			text-wrap: balance;
		}

		p {
			text-wrap: pretty;
		}

		:root {
			--color-primary: red;
		}

		[data-theme="dark"] {
			--color-primary: blue;
		}
	}
`
