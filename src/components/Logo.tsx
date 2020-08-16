import styled from 'styled-components'
import LogoFull from '../svg/Logo'
import LogoX from '../svg/LogoX'

interface LogoProps { readonly small?: boolean }

const LogoComponent = ({ small }: LogoProps) => (
	<a href="/">{ small ? <LogoX /> : <LogoFull /> }</a>
)

export default LogoComponent
