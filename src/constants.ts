export const DRESAN_EMAIL = "dresan.dev@gmail.com"
export const HOST_URL = "https://dresan.dev"
export const FORMSPREE_URL = "https://formspree.io/f"

interface Link {
	href: string
	label: string
	target?: "_blank" | "_top" | "_parent" | "_self"
}

export const APP_ROUTES = [
	{
		href: "/blog",
		label: "Blog",
	},
]

export const HEADER_LINKS: Link[] = [
	...APP_ROUTES,
	{
		href: "https://linkpeek.vercel.app/",
		label: "Links",
		target: "_blank",
	},
]
