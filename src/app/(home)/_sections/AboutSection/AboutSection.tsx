import { AstroJsLogo } from "~/components/Svg/AstroJsLogo"
import { NextJsLogo } from "~/components/Svg/NextJsLogo"
import { CssLogo } from "~/components/Svg/CssLogo"
import { MongoDbLogo } from "~/components/Svg/MongoDbLogo"
import { PostgreSqlLogo } from "~/components/Svg/PostgreSqlLogo"
import { ReactJsLogo } from "~/components/Svg/ReactJsLogo"
import { ExpressLogo } from "~/components/Svg/ExpressLogo"
import { JavascriptLogo } from "~/components/Svg/JavascriptLogo"
import { HtmlLogo } from "~/components/Svg/HtmlLogo"
import { StyledComponentsLogo } from "~/components/Svg/StyledComponentsLogo"
import { TypescriptLogo } from "~/components/Svg/TypescriptLogo"
import { NodeJsLogo } from "~/components/Svg/NodeJsLogo"
import styles from "./AboutSection.module.css"

const TechStack = [
	{
		name: "React",
		icon: <ReactJsLogo />,
		brandColor: "#61DAFB",
	},
	{
		name: "Next.js",
		icon: <NextJsLogo />,
		brandColor: "#ffffff",
	},
	{
		name: "CSS",
		icon: <CssLogo />,
		brandColor: "#1572B6",
	},
	{
		name: "HTML",
		icon: <HtmlLogo />,
		brandColor: "#E34F26",
	},
	{
		name: "Javascript",
		icon: <JavascriptLogo />,
		brandColor: "#F7DF1E",
	},
	{
		name: "Typescript",
		icon: <TypescriptLogo />,
		brandColor: "#3178C6",
	},
	{
		name: "Node.js",
		icon: <NodeJsLogo />,
		brandColor: "#5FA04E",
	},
	{
		name: "Styled Components",
		icon: <StyledComponentsLogo />,
		brandColor: "#DB7093",
	},
	{
		name: "Express",
		icon: <ExpressLogo />,
		brandColor: "#ffffff",
	},
	{
		name: "MongoDB",
		icon: <MongoDbLogo />,
		brandColor: "#47A248",
	},
	{
		name: "PostgreSQL",
		icon: <PostgreSqlLogo />,
		brandColor: "#4169E1",
	},
	{
		name: "Astro",
		icon: <AstroJsLogo />,
		brandColor: "#BC52EE",
	},
]

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
				🥴. Actualmente, estoy profundizando mi conocimiento en el ecosistema de React. En el
				futuro, deseo explorar otras alternativas para el desarrollo Front-end, como Vue.js o
				Svelte, y profundizar en estas tecnologías.
			</p>

			<h2 className={styles.title}>Mí stack de tecnologías</h2>
			{TechStack.map(({ name, icon }) => (
				<div key={name}>{icon}</div>
			))}
		</section>
	)
}
