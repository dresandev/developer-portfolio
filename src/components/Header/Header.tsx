import NextLink from "next/link"
import { styled } from "@linaria/react"
import DresanLogo from "~/components/Svg/DresanLogo"
import ThemeSwitcher from "~/components/ThemeSwitcher"
import Button from "~/components/Ui/Button"
import Link from "~/components/Ui/Link"

export default function Header() {
	return (
		<StyledHeader>
			<ContentWrapper>
				<NextLink href="/" aria-label="Ir a la página de inicio">
					<Logo />
				</NextLink>
				<Nav>
					<NavList>
						<li>
							<Link href="/">Blog</Link>
						</li>
						<li>
							<Link href="/">Links útiles</Link>
						</li>
					</NavList>
				</Nav>
				<OptionsWrapper>
					<Button>Contactar</Button>
					<ThemeSwitcher />
				</OptionsWrapper>
			</ContentWrapper>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	--items-spacing: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	block-size: 64px;
	padding-inline: 24px;
	border-block-end: 1px dashed var(--color-stroke);
`

const ContentWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: 32px;
	max-inline-size: 1400px;
	inline-size: 100%;
`

const Logo = styled(DresanLogo)`
	path {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		fill: transparent;
		animation: dash 5s linear forwards, fill 500ms linear 500ms forwards;
	}

	@keyframes dash {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes fill {
		to {
			fill: currentColor;
		}
	}
`

const Nav = styled.nav`
	margin-inline-end: auto;
`

const NavList = styled.ul`
	display: flex;
	column-gap: var(--items-spacing);
	list-style: none;
	padding-inline-start: 0;
`

const OptionsWrapper = styled.div`
	display: flex;
	align-items: center;
	column-gap: var(--items-spacing);
`
