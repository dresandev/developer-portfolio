import type { MetadataRoute } from "next"
import { HOST_URL, APP_ROUTES } from "~/constants"
import { projects } from "~/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = APP_ROUTES.map(({ href }) => ({
		url: `${HOST_URL}${href}`,
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
		...projectRoutes,
	]
}
