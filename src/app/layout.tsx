import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { ThemeProvider } from "next-themes"
import { Header } from "~/components/Header"
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
		<html lang="en" suppressHydrationWarning>
			<body className={GeistSans.className}>
				<ThemeProvider>
					<Header />
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
