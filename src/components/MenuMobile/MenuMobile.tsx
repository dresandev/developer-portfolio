"use client"

import { useState } from "react"
import Link from "next/link"
import clsx from "clsx"
import { toggleBodyOverflow } from "~/utils"
import { Button } from "~/components/Ui/Button"
import { ThemeSwitcher } from "~/components/ThemeSwitcher"
import styles from "./MenuMobile.module.css"

export const MenuMobile = () => {
	const [open, setOpen] = useState(false)

	const handleOnClick = () => {
		setOpen(!open)
		toggleBodyOverflow(!open)
	}

	return (
		<>
			<button
				className={clsx(styles.button, { [styles.open]: open })}
				aria-label={`${open ? "Cerrar" : "Abrir"} menú`}
				type="button"
				onClick={handleOnClick}
			>
				<span className={styles.buttonLine}></span>
				<span className={styles.buttonLine}></span>
			</button>
			<div className={clsx(styles.menu, { [styles.open]: open })}>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						<li>
							<Link className={styles.navLink} href="/">
								Blog
							</Link>
						</li>
						<li>
							<Link
								className={styles.navLink}
								href="https://personal-link-manager.vercel.app/"
								target="_blank"
							>
								Links útiles
							</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.optionsWrapper}>
					<Button className={styles.contactButton} size="medium" type="button">
						Contactar
					</Button>
					<div className={styles.themeWrapper}>
						<span>Tema</span> <ThemeSwitcher />
					</div>
				</div>
			</div>
		</>
	)
}
