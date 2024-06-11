import Link from "next/link"
import type { CoverProject } from "~/types"
import styles from "./ProjectCard.module.css"

interface Props extends CoverProject {}

export const ProjectCard: React.FC<Props> = ({ slug, imageUrl, name }) => {
	const href = `/project/${slug}`

	return (
		<article className={styles.card}>
			<Link className={styles.link} href={href}>
				{name}
			</Link>
			<figure className={styles.imageWrapper}>
				<img
					className={styles.image}
					src={imageUrl}
					alt=""
					width={684}
					height={385}
					loading="lazy"
					decoding="async"
				/>
			</figure>
			<h3 className={styles.title}>{name}</h3>
		</article>
	)
}
