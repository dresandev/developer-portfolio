import { forwardRef } from "react"
import clsx from "clsx"
import styles from "./TextField.module.css"

type TextFieldProps = {
	multiline?: boolean
} & React.InputHTMLAttributes<HTMLInputElement> &
	React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
	(props, ref) => {
		const { className, multiline = false, ...delegate } = props

		if (multiline) {
			return (
				<textarea
					ref={ref as React.Ref<HTMLTextAreaElement>}
					className={clsx(styles.textfield, styles.textarea, className)}
					{...delegate}
				/>
			)
		}

		return (
			<input
				ref={ref as React.Ref<HTMLInputElement>}
				className={clsx(styles.textfield, className)}
				{...delegate}
			/>
		)
	}
)

TextField.displayName = "TextField"
