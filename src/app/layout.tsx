import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import { SvgMasks } from "~/components/Svg/SvgMasks"
import { Header } from "~/components/Header"
import { Footer } from "~/components/Footer"
import "~/styles/reset.css"
import "~/styles/globals.css"

export const metadata: Metadata = {
	title: "Dresan | Frontend developer",
	description:
		"Web personal de Dresan, donde encontrarás mi portafolio, habilidades, información de contacto y blog. Explora mi trabajo y contáctame si tienes un proyecto en mente.",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={`${GeistSans.className} ${GeistSans.variable}`}>
				<ThemeProvider>
					<SvgMasks />
					<Header />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
