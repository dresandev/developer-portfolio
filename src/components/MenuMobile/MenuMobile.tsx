"use client"

import { useState } from "react"
import clsx from "clsx"
import { HEADER_LINKS } from "~/constants"
import { toggleBodyOverflow } from "~/utils"
import { useOnPathnameChange } from "~/hooks/use-on-pathname-change"
import { Link } from "~/components/Ui/Link"
import { Button } from "~/components/Ui/Button"
import { ThemeSwitcher } from "~/components/ThemeSwitcher"
import { ContactDialog } from "~/components/ContactDialog"
import styles from "./MenuMobile.module.css"

export const MenuMobile = () => {
	const [open, setOpen] = useState(false)

	useOnPathnameChange(() => {
		setOpen(false)
		toggleBodyOverflow(false)
	})

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
						{HEADER_LINKS.map(({ href, label, target }) => (
							<li key={href}>
								<Link className={styles.navLink} href={href} target={target}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.optionsWrapper}>
					<ContactDialog
						trigger={
							<Button className={styles.contactButton} size="medium" type="button">
								Contactar
							</Button>
						}
					/>
					<div className={styles.themeWrapper}>
						<span>Tema</span> <ThemeSwitcher />
					</div>
				</div>
			</div>
		</>
	)
}
