import NextLink from "next/link"
import { notFound } from "next/navigation"
import { projects } from "~/data/projects"
import { getPrevAndNextProjectSlug, getProjectBySlug } from "~/helpers/get-projects"
import { Link } from "~/components/Ui/Link"
import styles from "./page.module.css"

interface Props {
	params: { slug: string }
}

export function generateMetadata({ params }: Props) {
	const project = getProjectBySlug(params.slug)

	if (!project) notFound()

	return {
		title: `Dresan - Proyecto | ${project.name}`,
		description: project.description,
	}
}

export function generateStaticParams() {
	return projects.map(({ slug }) => ({
		params: { slug },
	}))
}

export default function Project({ params }: Props) {
	const project = getProjectBySlug(params.slug)!

	const { index, name, description, mobileImages, desktopImages, links } = project

	const [prevProjectSlug, nextProjectSlug] = getPrevAndNextProjectSlug(index)

	return (
		<>
			<div className={styles.wrapper}>
				<section>
					<h1 className={styles.title}>{name}</h1>
					<p>{description}</p>
					<div className={styles.linksWrapper}>
						{links.map(({ url, label }, index) => (
							<Link key={index} href={url} target="_blank">
								{label}
							</Link>
						))}
					</div>
				</section>
				<section className={styles.imagesSection}>
					<div className={styles.imagesWrapper}>
						{mobileImages.map((url, index) => (
							<figure key={index}>
								<img
									className={styles.image}
									src={url}
									alt={`Captura de pantalla ${++index} en movíl de ${name}`}
									width={700}
									height={1500}
									loading="eager"
								/>
							</figure>
						))}
					</div>
					<div className={styles.imagesWrapper}>
						{desktopImages.map((url, index) => (
							<figure key={index}>
								<img
									className={styles.image}
									src={url}
									alt={`Captura de pantalla ${++index} en escritorio de ${name}`}
									width={1400}
									height={787}
									loading="lazy"
									decoding="async"
								/>
							</figure>
						))}
					</div>
				</section>
			</div>
			<nav className={styles.nav}>
				<NextLink
					data-text="Anterior"
					className={styles.navLink}
					href={`/project/${prevProjectSlug}`}
				>
					Anterior
				</NextLink>
				<NextLink
					data-text="Siguiente"
					className={styles.navLink}
					href={`/project/${nextProjectSlug}`}
				>
					Siguiente
				</NextLink>
			</nav>
		</>
	)
}
