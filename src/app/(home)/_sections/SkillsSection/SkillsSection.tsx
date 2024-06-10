import { skills } from "~/data/skills"
import { SkillCard } from "~/components/SkillCard"
import styles from "./SkillsSection.module.css"

export const SkillsSection = () => {
	return (
		<section className={styles.section}>
			<h2 className={styles.title}>Mís habilidades</h2>
			<div className={styles.skillWrapper}>
				{skills.map((skill) => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>
		</section>
	)
}
