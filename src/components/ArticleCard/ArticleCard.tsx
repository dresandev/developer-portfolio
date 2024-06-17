import NextLink from "next/link"
import styles from "./ArticleCard.module.css"

interface Props {
	slug: string
	title: string
	description: string
	emoji: string
}

export const ArticleCard: React.FC<Props> = ({ slug, title, description, emoji }) => {
	const href = `/blog/${slug}`

	return (
		<article className={styles.card}>
			<NextLink className={styles.linkWrapper} href={href}></NextLink>
			<div className={styles.infoWrapper}>
				<h3 className={styles.title}>{title}</h3>
				<p>{description}</p>
			</div>
			<span className={styles.emoji}>{emoji}</span>
		</article>
	)
}
