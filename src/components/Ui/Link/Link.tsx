import Link from "next/link"
import { styled } from "@linaria/react"

export default styled(Link)`
	text-decoration: none;
	color: var(--color-text-secondary);
	transition: color 150ms ease;

	&:hover {
		color: var(--color-text);
	}
`
