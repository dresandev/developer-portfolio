import { forwardRef } from "react"
import { clsx } from "clsx"
import { Slot } from "~/components/Slot"
import styles from "./Button.module.css"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean
	size?: "large" | "medium" | "small"
	variant?: "primary" | "outlined"
	rounded?: "default" | "full"
}

export const Button: React.FC<Props> = forwardRef<HTMLButtonElement, Props>((props, ref) => {
	const {
		className,
		size = "large",
		variant = "primary",
		rounded = "default",
		asChild,
		...delegated
	} = props
	const Comp = asChild ? Slot : "button"

	return (
		<Comp
			ref={ref}
			className={clsx(styles.button, styles[variant], styles[size], styles[rounded], className)}
			{...delegated}
		/>
	)
})
