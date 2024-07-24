import type { MetadataRoute } from "next"
import { HOST_URL, APP_ROUTES } from "~/constants"
import { projects } from "~/data/projects"
import { getPosts } from "~/helpers/get-posts"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getPosts()

	const routes = APP_ROUTES.map(({ href }) => ({
		url: `${HOST_URL}${href}`,
		lastModified: new Date().toISOString().split("T")[0],
	}))

	const blogPosts = posts.map(({ slug }) => ({
		url: `${HOST_URL}/blog/${slug}`,
		lastModified: new Date().toISOString().split("T")[0],
	}))

	const projectRoutes = projects.map(({ slug }) => ({
		url: `${HOST_URL}/project/${slug}`,
		lastModified: new Date().toISOString().split("T")[0],
	}))

	return [
		{
			url: `${HOST_URL}/`,
			lastModified: new Date().toISOString().split("T")[0],
		},
		...routes,
		...blogPosts,
		...projectRoutes,
	]
}
