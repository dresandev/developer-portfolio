import { clsx } from "clsx"
import { Slot } from "~/components/Slot"
import styles from "./Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
	size?: "large" | "small"
	variant?: "primary" | "outlined"
}

export const Button: React.FC<Props> = ({
	className,
	size = "large",
	variant = "primary",
	asChild,
	...delegated
}) => {
	const Comp = asChild ? Slot : "button"

	return (
		<Comp
			className={clsx(styles.button, styles[variant], styles[size], className)}
			{...delegated}
		/>
	)
}
