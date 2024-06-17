import { coverProjects } from "~/data/projects"
import { ProjectCard } from "~/components/ProjectCard"
import styles from "./ProjectsSection.module.css"

export const ProjectsSection = () => {
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>Últimos proyectos</h2>
			<div className={styles.projectsWrapper}>
				{coverProjects.map((project) => (
					<ProjectCard key={project.name} {...project} />
				))}
			</div>
		</section>
	)
}
