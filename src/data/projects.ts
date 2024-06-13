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
			"Aplicación web para explorar películas, con funcionalidades como infinite scroll, un buscador de películas enfocándose en la navegación por teclado al estilo del buscador de YouTube, un carrusel para promocionar películas con características como autoplay solo cuando esté en el viewport o la pestaña tenga el foco, animaciones al cambiar y mostrar un nuevo ítem, entre otros muchos detalles y funcionalidades. El diseño de la app es una combinación entre el diseño de la aplicación de Amazon Prime Video y Crunchyroll.",
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
			"Clon del ecommerce de Bershka implementando las funcionalidades principales como el flujo de autenticación usando auth.js, el flujo de pago de productos usando la pasarela de pagos mercadopago, maquetando la app lo mas similar posible, agregando el responsive sin usar js (que es como se hace originalmente), implementando código 100% funcional en producción.",
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
			"Aplicación para gestionar enlaces donde se hace un poco de scraping para obtener datos como el título, la descripción y la imagen usada en OGP. Cuenta con un componente para gestionar las etiquetas al estilo del TagsInput de GitHub. El enfoque principal es del lado del servidor, haciendo que la mayoría de las peticiones se realicen en el servidor.",
		mobileImages: [`${MOBILE_IMAGE_PATH}/linkpeek-1.webp`, `${MOBILE_IMAGE_PATH}/linkpeek-2.webp`],
		desktopImages: [
			`${DESKTOP_IMAGE_PATH}/linkpeek-1.webp`,
			`${DESKTOP_IMAGE_PATH}/linkpeek-2.webp`,
		],
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
		tags: [Tag.nextJs14, Tag.typescript, Tag.prismaOrm, Tag.tailwindCss, Tag.authJs],
	},
]
