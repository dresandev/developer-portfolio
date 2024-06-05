import Link from "next/link"
import { Button } from "~/components/Ui/Button"
import { ArrowDown } from "~/components/Svg/ArrowDown"
import { CopyEmailSmallButton } from "~/components/CopyEmailSmallButton"
import styles from "./HeroSection.module.css"

export const HeroSection = () => {
	return (
		<section className={styles.wrapper}>
			<span className={styles.phrase}>El código más limpio es el que no se escribió.</span>
			<h1 className={styles.title}>Dresan - Desarrollador Frontend</h1>
			<p className={styles.introSubtitle}>
				Hago que tu proyecto <strong>destaque</strong> con la <strong>elegancia</strong> y la{" "}
				<strong>calidad</strong> que merece.
			</p>
			<div className={styles.actions}>
				<Button>ʕっ•ᴥ•ʔっ Contactame</Button>
				<Button className={styles.downloadCvAction} variant="outlined" asChild>
					<Link href="/">
						Descargar Curriculum <ArrowDown />
					</Link>
				</Button>
			</div>
			<CopyEmailSmallButton />
		</section>
	)
}
