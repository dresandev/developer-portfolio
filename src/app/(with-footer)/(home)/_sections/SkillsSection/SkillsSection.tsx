import clsx from "clsx"
import { skills } from "~/data/skills"
import { SkillCard } from "~/components/SkillCard"
import styles from "./SkillsSection.module.css"

export const SkillsSection = () => {
	return (
		<section className={clsx("section-wrapper", styles.section)}>
			<h2 className={styles.title}>Stack tecnológico</h2>
			<div className={styles.skillWrapper}>
				{skills.map((skill) => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>
		</section>
	)
}
