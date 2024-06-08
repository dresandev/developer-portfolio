import type { Project } from "~/types"

const COVER_IMAGE_BASE_PATH = "assets/images/projects/"

export const projects: Project[] = [
	{
		name: "Dreflix",
		description: "App para explorar peliculas al estilo de Amazon Prime Video y Crunchyroll.",
		links: [
			{
				label: "Visitar sitio",
				url: "https://dreflix.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/dresandev/dreflix",
			},
		],
		imageUrl: `${COVER_IMAGE_BASE_PATH}dreflix-cover.png`,
	},
	{
		name: "Vexara",
		description: "Bershka ecommerce clone con las caracteristicas principales del ecommerce.",
		links: [
			{
				label: "Visitar sitio",
				url: "https://vexara.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/dresandev/vexara",
			},
		],
		imageUrl: `${COVER_IMAGE_BASE_PATH}vexara-cover.png`,
	},
	{
		name: "Personal link manager",
		description: "App para la gestion de links de manera fácil y rápida.",
		links: [
			{
				label: "Visitar sitio",
				url: "https://personal-link-manager.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/dresandev/personal-link-manager",
			},
		],
		imageUrl: `${COVER_IMAGE_BASE_PATH}links-manager-cover.png`,
	},
]
