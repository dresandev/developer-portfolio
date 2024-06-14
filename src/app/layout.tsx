import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import { HOST_URL } from "~/constants"
import { SvgMasks } from "~/components/Svg/SvgMasks"
import { Header } from "~/components/Header"
import "~/styles/reset.css"
import "~/styles/globals.css"
import "~/styles/utils.css"

export const metadata: Metadata = {
	metadataBase: new URL(HOST_URL),
	title: "Dresan - Frontend developer",
	description:
		"Web personal de Dresan, donde encontrarás mi portafolio, habilidades, información de contacto y blog. Explora mi trabajo y contáctame si tienes un proyecto en mente.",
	authors: [{ name: "Javier Andres - Dresan" }],
	creator: "Javier Andres - Dresan",
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
					<div className="__next">
						<Header />
						{children}
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
