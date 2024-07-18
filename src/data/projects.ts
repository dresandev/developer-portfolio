import type { CoverProject } from "~/types"
import { Tag } from "./tags"

const IMAGES_BASE_PATH = "/assets/images/projects"
const COVER_IMAGE_PATH = `${IMAGES_BASE_PATH}/cover`
const MOBILE_IMAGE_PATH = `${IMAGES_BASE_PATH}/mobile`
const DESKTOP_IMAGE_PATH = `${IMAGES_BASE_PATH}/desktop`

export const projectMetadata = {
	dreflix: {
		slug: "dreflix",
		name: "Dreflix",
	},
	vexara: {
		slug: "vexara",
		name: "Vexara",
	},
	linkpeek: {
		slug: "linkpeek",
		name: "Linkpeek",
	},
}

export const coverProjects: CoverProject[] = [
	{
		...projectMetadata.dreflix,
		imageUrl: `${COVER_IMAGE_PATH}/dreflix.webp`,
		description: "App de exploración de películas, al estilo de Amazon Prime Video y Crunchyroll.",
	},
	{
		...projectMetadata.vexara,
		imageUrl: `${COVER_IMAGE_PATH}/vexara.webp`,
		description:
			"Clon del e-commerce de Bershka, implementando el flujo principal de un e-commerce.",
	},
	{
		...projectMetadata.linkpeek,
		imageUrl: `${COVER_IMAGE_PATH}/linkpeek.webp`,
		description:
			"App para la gestión de links, haciendo scraping para la obtención de la información de la web.",
	},
]

export const projects = [
	{
		...projectMetadata.dreflix,
		index: 0,
		description:
			"Aplicación web para explorar películas, similar a Amazon Prime Video y Crunchyroll, con funcionalidades como scroll infinito, buscador de películas optimizado para navegación por teclado, similar al de YouTube, y un carrusel para promocionar películas con características como reproducción automática solo cuando esté visible en el viewport o la pestaña tenga el foco, entre otros detalles y funcionalidades.",
		mobileImages: [`${MOBILE_IMAGE_PATH}/dreflix-1.webp`, `${MOBILE_IMAGE_PATH}/dreflix-2.webp`],
		desktopImages: [`${DESKTOP_IMAGE_PATH}/dreflix-1.webp`, `${DESKTOP_IMAGE_PATH}/dreflix-2.webp`],
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
		tags: [
			Tag.nextJs14,
			Tag.cssModules,
			Tag.typescript,
			Tag.theMovieDB,
			Tag.zustand,
			Tag.movieExplorer,
		],
	},
	{
		...projectMetadata.vexara,
		index: 1,
		description:
			"Clon del ecommerce de Bershka, implementando funcionalidades principales como el flujo de autenticación con auth.js, el flujo de pago de productos mediante la pasarela de pagos MercadoPago, maquetación de la app con precisión pixel perfect, y diseño responsive sin usar JavaScript (como se hace originalmente). Además, se implementó código funcional en producción.",
		mobileImages: [`${MOBILE_IMAGE_PATH}/vexara-1.webp`, `${MOBILE_IMAGE_PATH}/vexara-2.webp`],
		desktopImages: [`${DESKTOP_IMAGE_PATH}/vexara-1.webp`, `${DESKTOP_IMAGE_PATH}/vexara-2.webp`],
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
		tags: [
			Tag.mercadopago,
			Tag.zustand,
			Tag.prismaOrm,
			Tag.nextJs14,
			Tag.authJs,
			Tag.typescript,
			Tag.ecommerce,
		],
	},
	{
		...projectMetadata.linkpeek,
		index: 2,
		description:
			"Aplicación para gestionar enlaces, realizando scraping para obtener datos como el título, la descripción y la imagen usada en el Open Graph Protocol (OGP). Incluye un componente para gestionar etiquetas similar al TagsInput de GitHub. El enfoque principal es del lado del servidor, de manera que la mayoría de las peticiones se realicen en el servidor.",
		mobileImages: [`${MOBILE_IMAGE_PATH}/linkpeek-1.webp`, `${MOBILE_IMAGE_PATH}/linkpeek-2.webp`],
		desktopImages: [
			`${DESKTOP_IMAGE_PATH}/linkpeek-1.webp`,
			`${DESKTOP_IMAGE_PATH}/linkpeek-2.webp`,
		],
		links: [
			{
				label: "Visitar sitio",
				url: "https://linkpeek.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/dresandev/linkpeek",
			},
		],
		tags: [Tag.nextJs14, Tag.typescript, Tag.prismaOrm, Tag.tailwindCss, Tag.authJs],
	},
]
