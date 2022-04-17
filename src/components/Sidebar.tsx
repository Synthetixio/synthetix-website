import styled from 'styled-components';
import media from 'styled-media-query';
import SideBarItem from './SideBarItem';
import Socials from './Socials';

const SidebarContainer = styled.div`
	flex-basis: 300px;
	flex-grow: 1;
	background-color: ${({ theme }) => theme.colors.bgBlack};
	padding: 30px;

	${media.lessThan('medium')`
                display: none;
        `}
`;

const SocialWrap = styled.div`
	position: absolute;
	bottom: 20px;
`;

export default function Sidebar(props: any) {
	const { navDocs, subSlug } = props;

	return (
		<SidebarContainer>
			{navDocs.map((item: any, i: number) => (
				<SideBarItem subSlug={subSlug} props={item} key={i} />
			))}
			<SocialWrap>
				<Socials />
			</SocialWrap>
		</SidebarContainer>
	);
}
