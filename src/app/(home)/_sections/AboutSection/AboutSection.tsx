import styles from "./AboutSection.module.css"

export const AboutSection = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Un poco sobre mí</h2>
			<p className={styles.aboutMe}>
				Hola 👋🏻, me llamo Javier Andrés, pero puedes decirme Dresan. Me sumergí en el mundo del
				desarrollo de software hace más de 3 años y me especializo en el desarrollo Front-end.
				Valoro los pequeños detalles y soy un gran fan de CSS (¡el mejor lenguaje de programación!
				🙂). Me apasiona el desarrollo de software en todas sus etapas; disfruto aprendiendo sobre
				arquitectura de software y manteniéndome al tanto de los avances en inteligencia artificial
				🥴. Actualmente, estoy profundizando mi conocimiento en el ecosistema de React, pero siempre
				estoy dispuesto a aprender nuevas tecnologías.
			</p>
		</section>
	)
}
