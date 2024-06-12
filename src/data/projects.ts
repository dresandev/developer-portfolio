import type { CoverProject } from "~/types"

const COVER_IMAGE_BASE_PATH = "assets/images/projects/"

export const coverProjects: CoverProject[] = [
	{
		slug: "dreflix",
		imageUrl: `${COVER_IMAGE_BASE_PATH}dreflix-cover.webp`,
		name: "Dreflix",
		description: "App de exploración de películas, al estilo de Amazon Prime Video y Crunchyroll.",
	},
	{
		slug: "vexara",
		imageUrl: `${COVER_IMAGE_BASE_PATH}vexara-cover.webp`,
		name: "Vexara",
		description:
			"Clon del e-commerce de Bershka, implementando el flujo principal de un e-commerce.",
	},
	{
		slug: "linkpeek",
		imageUrl: `${COVER_IMAGE_BASE_PATH}linkpeek-cover.webp`,
		name: "Linkpeek",
		description:
			"App para la gestión de links, haciendo scraping para la obtención de la información de la web.",
	},
]
