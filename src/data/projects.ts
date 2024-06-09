import type { CoverProject } from "~/types"

const COVER_IMAGE_BASE_PATH = "assets/images/projects/"

export const coverProjects: CoverProject[] = [
	{
		name: "Dreflix",
		description: "App para explorar peliculas al estilo de Amazon Prime Video y Crunchyroll.",
		imageUrl: `${COVER_IMAGE_BASE_PATH}dreflix-cover.png`,
	},
	{
		name: "Vexara",
		description: "Bershka ecommerce clone con las caracteristicas principales del ecommerce.",
		imageUrl: `${COVER_IMAGE_BASE_PATH}vexara-cover.png`,
	},
	{
		name: "Personal links manager",
		description: "App para la gestion de links de manera fácil y rápida.",
		imageUrl: `${COVER_IMAGE_BASE_PATH}links-manager-cover.png`,
	},
]
