import styled from 'styled-components'

interface LogoProps { readonly small?: boolean }

const LogoComponent = ({ small }: LogoProps) => (
	<a href="/"><Logo small={small} /></a>
)

const Logo = styled.img.attrs((props: LogoProps) => ({
	src: props.small ? '/logo-x.svg' : '/logo.svg',
	alt: 'Synthetix Logo'
}))<LogoProps>`
	color: red;
`

export default LogoComponent
