import { projects } from "~/data/projects"
import { ProjectCard } from "~/components/ProjectCard"
import styles from "./ProjectsSection.module.css"

export const ProjectsSection = () => {
	return (
		<section>
			<h2 className={styles.title}>Proyectos 😼</h2>
			<div className={styles.projectsWrapper}>
				{projects.map((project) => {
					return <ProjectCard key={project.name} project={project} />
				})}
			</div>
		</section>
	)
}
