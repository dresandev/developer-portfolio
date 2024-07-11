import { getPosts } from "~/helpers/get-posts"
import { sortPostsByDate } from "~/helpers/sort-posts"
import { PostCard } from "~/components/PostCard"
import styles from "./page.module.css"

export const metadata = {
	title: "Dresan - Blog",
	description: "Tutoriales simples sobre desarrollo web, enfocados mayormente en React.",
}

export default async function Blog() {
	const posts = await getPosts()
	const sortedPosts = sortPostsByDate({ posts })

	return (
		<main className={styles.wrapper}>
			<h1 className={styles.title}>Blog</h1>
			<p>
				Disclaimer: los post fueron creados con IA, si hay información incorrecta es culpa de
				chatGPT y mia por no revisar 💀
			</p>
			<div className={styles.postsWrapper}>
				{sortedPosts.map((post) => (
					<PostCard key={post.slug} {...post} />
				))}
			</div>
		</main>
	)
}
