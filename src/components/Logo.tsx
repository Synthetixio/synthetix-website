import styled from 'styled-components'
import { Fixable } from './Header'
import media from 'styled-media-query'

type LogoProps = { readonly small?: boolean }

const LogoComponent = ({ small }: LogoProps) => {
	const src = small ? '/logo-x.svg' : 'logo.svg'

	return (
		<a href="/"><img src={src} /></a>
	)
}

export default LogoComponent
