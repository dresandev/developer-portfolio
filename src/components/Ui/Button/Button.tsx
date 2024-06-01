import { styled } from "@linaria/react"

export default styled.button`
	display: flex;
	align-items: center;
	block-size: 32px;
	padding-inline: 6px;
	font-size: 14px;
	font-weight: 500;
	border: none;
	border-radius: 6px;
	background-color: var(--color-text);
	color: var(--color-background);
	cursor: pointer;
	user-select: none;
	transition: background-color 150ms;

	&:hover {
		background-color: var(--color-background-hover);
	}
`
