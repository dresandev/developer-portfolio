import type { CoverProject } from "~/types"

const COVER_IMAGE_BASE_PATH = "assets/images/projects/"

export const coverProjects: CoverProject[] = [
	{
		slug: "dreflix",
		imageUrl: `${COVER_IMAGE_BASE_PATH}dreflix-cover.webp`,
		name: "Dreflix",
	},
	{
		slug: "vexara",
		imageUrl: `${COVER_IMAGE_BASE_PATH}vexara-cover.webp`,
		name: "Vexara",
	},
	{
		slug: "personal-link-manager",
		imageUrl: `${COVER_IMAGE_BASE_PATH}personal-link-manager-cover.webp`,
		name: "Personal link manager",
	},
]
