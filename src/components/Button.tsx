import styled from "styled-components"
import Link from 'next/link'
import { theme } from "../styles/theme"

interface ButtonProps {
	readonly link: string,
	readonly className?: string,
	children: React.ReactNode
}

const ButtonComponent = ({ link, className, children } : ButtonProps) => (
	<Link href={link} passHref={true}><A className={className} target="_blank"><Button>{children}</Button></A></Link>
)

const A = styled.a`
	display: inline-block;
`

const Button = styled.button`
	text-decoration: uppercase;

	background: #00D1FF;
	box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
	border-radius: 4px;
	border: none;
	outline: none;
	cursor: pointer;
	${theme.fonts.button};
	width: 100%;
	height: 100%;
`

export default ButtonComponent
