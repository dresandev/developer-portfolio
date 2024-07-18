import NextLink from "next/link"
import { HEADER_LINKS } from "~/constants"
import { DresanLogo } from "~/components/Svg/DresanLogo"
import { ThemeSwitcher } from "~/components/ThemeSwitcher"
import { Button } from "~/components/Ui/Button"
import { Link } from "~/components/Ui/Link"
import { MenuMobile } from "~/components/MenuMobile"
import { ContactDialog } from "~/components/ContactDialog"
import styles from "./Header.module.css"

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.contentWrapper}>
				<NextLink href="/" aria-label="Ir a la página de inicio">
					<DresanLogo className={styles.dresanLogo} />
				</NextLink>
				<nav className={styles.nav}>
					<ul className={styles.navList}>
						{HEADER_LINKS.map(({ label, href, target }) => (
							<li key={href}>
								<Link href={href} target={target}>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.optionsWrapper}>
					<ContactDialog
						trigger={
							<Button size="small" type="button">
								Contactar
							</Button>
						}
					/>
					<ThemeSwitcher />
				</div>
				<MenuMobile />
			</div>
		</header>
	)
}
