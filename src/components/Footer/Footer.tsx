import { socialMediaLinks } from "~/data/links"
import { Link } from "~/components/Ui/Link"
import { ArrowUpRight } from "~/components/Svg/ArrowUpRight"
import styles from "./Footer.module.css"

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span>ฅ՞•ﻌ•՞ฅ - 2024</span>
			<div className={styles.linksWrapper}>
				{socialMediaLinks.map(({ url, label }) => (
					<Link key={url} className={styles.link} href={url} target="_blank">
						{label}
						<ArrowUpRight />
					</Link>
				))}
			</div>
		</footer>
	)
}
