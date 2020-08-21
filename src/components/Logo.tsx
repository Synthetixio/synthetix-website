import styled from 'styled-components'

interface LogoProps { readonly small?: boolean }


const LogoComponent = ({ small }: LogoProps) => {
	const src = small ? '/logo-x.svg' : 'logo.svg'

	return (
		<a href="/"><img src={src} /></a>
	)
}

export default LogoComponent
