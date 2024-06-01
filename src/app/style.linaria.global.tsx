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

		a {
			color: inherit;
		}

		:root {
			--ease-elastic-out-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
			--ease-elastic-3: var(--ease-elastic-out-3);
			--ease-elastic-out-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
			--ease-elastic-4: var(--ease-elastic-out-4);
			--ease-3: cubic-bezier(0.25, 0, 0.3, 1);
			--ease-out-5: cubic-bezier(0, 0, 0, 1);
		}

		[data-theme="light"] {
			--color-primary: hsl(212, 100%, 48%);
			--color-text: hsl(0, 0%, 1%);
			--color-text-secondary: hsl(0, 0%, 6%);
			--color-background: hsl(0, 0%, 93%);
			--color-background-hover: hsl(0, 0%, 21%);
			--color-background-secondary: hsl(0, 0%, 62%);
			--color-stroke: hsl(0, 0%, 12%);
		}

		[data-theme="dark"] {
			--color-primary: hsl(212, 100%, 48%);
			--color-text: hsl(0, 0%, 93%);
			--color-text-secondary: hsl(0, 0%, 62%);
			--color-background: hsl(0, 0%, 1%);
			--color-background-hover: hsl(0, 0%, 80%);
			--color-background-secondary: hsl(0, 0%, 6%);
			--color-stroke: hsl(0, 0%, 12%);
		}

		::selection {
			background-color: var(--color-primary);
			color: hsl(0, 0%, 100%);
		}

		:focus-visible {
			outline: 2px solid hsl(210, 100%, 66%);
			outline-offset: 2px;
			border-radius: 1px;
		}

		html {
			scrollbar-color: hsl(0, 0%, 80%) var(--color-background);
			scrollbar-width: thin;
		}

		body {
			accent-color: var(--color-primary);
			text-rendering: optimizeSpeed;
			color: var(--color-text);
			background-color: var(--color-background);
			transition-property: color, background-color;
			transition-duration: 150ms;
		}
	}
`
