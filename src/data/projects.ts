import type { CoverProject } from "~/types"

const COVER_IMAGE_BASE_PATH = "assets/images/projects/"

export const coverProjects: CoverProject[] = [
	{
		name: "Dreflix",
		imageUrl: `${COVER_IMAGE_BASE_PATH}dreflix-cover.webp`,
	},
	{
		name: "Vexara",
		imageUrl: `${COVER_IMAGE_BASE_PATH}vexara-cover.webp`,
	},
	{
		name: "Personal link manager",
		imageUrl: `${COVER_IMAGE_BASE_PATH}personal-link-manager-cover.webp`,
	},
]
