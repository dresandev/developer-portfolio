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
	dree: {
		slug: "dree",
		name: "Dree",
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
			"App para gestionar links, haciendo scraping para la obtención de información de las webs.",
	},
	{
		...projectMetadata.dree,
		imageUrl: `${COVER_IMAGE_PATH}/dree.webp`,
		description: "Herramienta para generar diagramas de texto sobre estructuras de directorios y archivos 📁.",
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
			"Aplicación para gestionar enlaces, realizando scraping para obtener datos como el título, descripción e imagen usada en el Open Graph Protocol (OGP). Incluye un componente para agregar etiquetas similar al TagsInput de GitHub. El enfoque principal es del lado del servidor, de manera que la mayoría del trabajo se realiza en el servidor.",
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
		tags: [Tag.nextJs14, Tag.typescript, Tag.prismaOrm, Tag.tailwindCss, Tag.authJs, Tag.tool],
	},
	{
		...projectMetadata.dree,
		index: 3,
		description: "Herramienta para generar diagramas de texto sobre estructuras de directorios y archivos, basado en el proyecto de Nathan Friend: https://tree.nathanfriend.io/.",
		mobileImages: [`${MOBILE_IMAGE_PATH}/dree-1.webp`],
		desktopImages: [
			`${DESKTOP_IMAGE_PATH}/dree-1.webp`
		],
		links: [
			{
				label: "Visitar sitio",
				url: "https://dreee.vercel.app",
			},
			{
				label: "Ver código",
				url: "https://github.com/dresandev/dree",
			},
			{
				label: "Ver proyecto de Nathan Friend",
				url: "https://tree.nathanfriend.io/",
			},
		],
		tags: [Tag.nextJs14, Tag.zustand, Tag.cssModules, Tag.typescript, Tag.tool, Tag.jest, Tag.reactTestingLibrary],
	},
]
