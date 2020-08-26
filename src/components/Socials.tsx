import styled from 'styled-components'
import Discord from '../svg/Discord'
import Twitter from '../svg/Twitter'
import Github from '../svg/Github'
import Link from 'next/link'
import { Props } from 'react'
import media from 'styled-media-query'

const data = [{
	link: 'https://discord.com/invite/AEdUHzt',
	label: 'discord',
	image: <Discord />
}, {
	link: 'https://twitter.com/synthetix_io',
	label: 'twitter',
	image: <Twitter />
}, {
	link: 'https://github.com/synthetixio',
	label: 'github',
	image: <Github />
}]

const Socials = ({ className }: React.PropsWithoutRef<JSX.IntrinsicElements["ul"]>) => {
	return (
		<SocialsContainer className={className}>
			{ data.map(s => (
				<Social key={s.label}>
					<Link href={s.link}><a target="_blank">{s.image}</a></Link>
				</Social>
			)) }
		</SocialsContainer>
	)
}

const SocialsContainer = styled.ul`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	margin-left: 35px;

	${media.lessThan('medium')`
		margin-left: 0;
	`}
`

const Social = styled.li`
	margin-right: 26px;

	&:last-child {
		margin-right: 0;
	}

	svg * {
		transition: fill 0.3s ease-out;
	}

	&:hover {
		svg * {
			fill: ${props => props.theme.colors.cyan} !important;
		}
	}
`
export default Socials
