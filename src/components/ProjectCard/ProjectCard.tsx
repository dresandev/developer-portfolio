import Link from "next/link"
import type { Project } from "~/types"
import styles from "./ProjectCard.module.css"

interface Props {
	project: Project
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
	const { imageUrl, name, description } = project

	return (
		<article className={styles.card}>
			<Link href={"/"}></Link>
			<img className={styles.image} src={imageUrl} alt="" />
			<h3 className={styles.title}>{name}</h3>
			<p>{description}</p>
		</article>
	)
}
