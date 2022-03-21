// @ts-nocheck
import styled from 'styled-components';
import media from 'styled-media-query';
import SideBarItem from './SideBarItem';
import Socials from '../Socials';

const SidebarContainer = styled.div`
	flex-basis: 300px;
	flex-grow: 1;
	background-color: ${({ theme }) => theme.colors.bgBlack};
	padding-top: 30px;
	padding-right: 30px;
	padding-bottom: 30px;
	padding-left: 57px;

	${media.lessThan('medium')`
                display: none;
        `}
`;

const SocialWrap = styled.div`
	position: absolute;
	bottom: 20px;
`;

export default function Sidebar(props: any) {
	const { navDocs } = props;

	return (
		<SidebarContainer>
			{navDocs.map((item: any, i: number) => (
				<SideBarItem props={item} key={i} />
			))}
			<SocialWrap>
				<Socials />
			</SocialWrap>
		</SidebarContainer>
	);
}
