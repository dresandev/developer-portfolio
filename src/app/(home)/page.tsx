import { HeroSection } from "./_sections/HeroSection"
import { ProjectsSection } from "./_sections/ProjectsSection"
import { AboutSection } from "./_sections/AboutSection"
import { SkillsSection } from "./_sections/SkillsSection"
import { ContactSection } from "./_sections/ContactSection"

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
			<SkillsSection />
			<ContactSection />
		</>
	)
}
