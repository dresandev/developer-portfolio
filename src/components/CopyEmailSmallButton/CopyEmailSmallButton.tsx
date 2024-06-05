"use client"

import { useState } from "react"
import clsx from "clsx"
import { copyToClipboard } from "~/utils"
import { useTimeout } from "~/hooks/use-timeout"
import { CheckIcon } from "~/components/Svg/CheckIcon"
import { CopyIcon } from "~/components/Svg/CopyIcon"
import styles from "./CopyEmailSmallButton.module.css"

const RESET_FEEDBACK_TIME = 2500
const TO_COPY_EMAIL = "dresan.dev@gmail.com"

export const CopyEmailSmallButton = () => {
	const [displayFeedback, setDisplayFeedback] = useState(false)

	const hideFeedback = () => {
		setDisplayFeedback(false)
	}

	useTimeout(hideFeedback, RESET_FEEDBACK_TIME)

	const handleOnClick = async () => {
		const isCopied = await copyToClipboard(TO_COPY_EMAIL)
		setDisplayFeedback(isCopied)
	}

	return (
		<button className={styles.button} onClick={handleOnClick}>
			<span>✉ {TO_COPY_EMAIL}</span>
			<CopyIcon
				className={clsx(styles.icon, {
					[styles.showIcon]: !displayFeedback,
					[styles.hideIcon]: displayFeedback,
				})}
			/>
			<CheckIcon className={clsx(styles.icon, { [styles.showIcon]: displayFeedback })} />
		</button>
	)
}
