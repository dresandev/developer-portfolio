
import NextLink from "next/link"
import { DresanLogo } from "~/components/Svg/DresanLogo"
import { ThemeSwitcher } from "~/components/ThemeSwitcher"
import { Button } from "~/components/Ui/Button"
import { Link } from "~/components/Ui/Link"
import { MenuMobile } from "~/components/MenuMobile"
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
						<li>
							<Link href="/">Blog</Link>
						</li>
						<li>
							<Link href="https://personal-link-manager.vercel.app/" target="_blank">
								Links útiles
							</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.optionsWrapper}>
					<Button size="small" type="button">
						Contactar
					</Button>
					<ThemeSwitcher />
				</div>
				<MenuMobile />
			</div>
		</header>
	)
}
