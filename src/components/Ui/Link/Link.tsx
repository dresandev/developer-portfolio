import NextLink from "next/link"
import styles from "./Link.module.css"

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode
	href: string
}

export const Link: React.FC<Props> = ({ href, children, ...delegated }) => {
	return (
		<NextLink className={styles.link} href={href} {...delegated}>
			{children}
		</NextLink>
	)
}
