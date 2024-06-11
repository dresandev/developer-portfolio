import clsx from "clsx"
import styles from "./AboutSection.module.css"

export const AboutSection = () => {
	return (
		<section className={clsx("section-wrapper", styles.section)}>
			<h2 className={styles.title}>Un poco sobre mí</h2>
			<p className={styles.aboutMe}>
				Hola 👋🏻, me llamo Javier Andrés, pero puedes decirme Dresan. Soy desarrollador de software y
				me especializo en el Front-end. Valoro los pequeños detalles y soy un gran fan de CSS (¡el
				mejor lenguaje de programación! 🙂). Disfruto aprendiendo sobre el desarrollo de software en
				sus distintas etapas y manteniéndome al tanto de los avances en inteligencia artificial 🥴.
				Actualmente, estoy profundizando mi conocimiento en el ecosistema de React, pero siempre
				estoy dispuesto a aprender nuevas tecnologías 😉.
			</p>
		</section>
	)
}
