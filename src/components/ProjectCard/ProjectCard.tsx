import Link from "next/link"
import type { CoverProject } from "~/types"
import styles from "./ProjectCard.module.css"

interface Props extends CoverProject {}

export const ProjectCard: React.FC<Props> = ({ imageUrl, name, description }) => {
	return (
		<article className={styles.card}>
			<Link className={styles.link} href="/">
				{name}
			</Link>
			<figure className={styles.imageWrapper}>
				<img className={styles.image} src={imageUrl} alt="" />
			</figure>
			<h3 className={styles.title}>{name}</h3>
			<p>{description}</p>
		</article>
	)
}
