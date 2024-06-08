import NextLink from "next/link"
import clsx from "clsx"
import styles from "./Link.module.css"

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	children: React.ReactNode
	href: string
}

export const Link: React.FC<Props> = ({ href, children, className, ...delegated }) => {
	return (
		<NextLink className={clsx(styles.link, className)} href={href} {...delegated}>
			{children}
		</NextLink>
	)
}
