import { FunctionComponent } from "react"
import styled from "styled-components"
import Link from 'next/link'
import { theme } from "../styles/theme"

type ButtonProps = {
	readonly link: string,
	readonly className?: string,
} & StyledButton

type StyledButton = {
	readonly buttonType?: 'primary' | 'secondary'
}

const ButtonComponent: FunctionComponent<ButtonProps> = ({ link, className, children, buttonType = 'primary' }) => (
	<Link href={link} passHref={true}><A className={className} target="_blank"><Button buttonType={buttonType}>{children}</Button></A></Link>
)

const A = styled.a`
	display: inline-block;
`

const Button = styled.button<StyledButton>`
	text-decoration: uppercase;

	box-shadow: 0px 0px 10px rgba(0, 209, 255, 0.9);
	box-sizing: border-box;
	border-radius: 4px;

	background: ${(props) => props.buttonType === 'primary' ? props.theme.colors.cyan : '#0C2344'};
	border: ${(props) => props.buttonType === 'primary' ? 'none' : `1px solid ${props.theme.colors.cyan}` };
	color: ${(props) => props.buttonType === 'primary' ? props.theme.colors.bgBlack: props.theme.colors.cyan };

	outline: none;
	cursor: pointer;
	${theme.fonts.button};
	width: 100%;
	height: 100%;

	transition: opacity 0.2s ease-out, color 0.2s ease-out, background 0.2s ease-out;

	&:hover {
		background: ${(props) => props.buttonType === 'primary' ? '#58E1FF' : '#173764'};
	}

	&:disabled {
		opacity: 0.2;
		background: #00D1FF !important;
	}
`

export default ButtonComponent
