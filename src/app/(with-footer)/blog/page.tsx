import { blogArticles } from "~/data/blog-articles"
import { ArticleCard } from "~/components/ArticleCard"
import styles from "./page.module.css"

export default function Blog() {
	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Blog</h1>
			<h2>Todas las publicaciones</h2>
			<div className={styles.articlesWrapper}>
				{blogArticles.map((article) => (
					<ArticleCard key={article.slug} {...article} />
				))}
			</div>
		</main>
	)
}
