interface Link {
	label: string
	url: string
}

export interface Project {
	name: string
	description: string
	links: Link[]
	imageUrl: string
}
