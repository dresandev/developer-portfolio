import { HeroSection } from "./_sections/HeroSection"
import { ProjectsSection } from "./_sections/ProjectsSection"
import { AboutSection } from "./_sections/AboutSection"

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProjectsSection />
			<AboutSection />
		</>
	)
}
