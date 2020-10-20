import styled from 'styled-components';
import { Section, Button, Line } from '../../components';
import { SectionDescription } from '../../components/Section';
import media from 'styled-media-query';

const BuildSection = () => (
	<BuildContainer>
		<Columns>
			<Left>
				<GlowingBuildCircle />
			</Left>
			<Right>
				<h2>build</h2>
				<SectionDescription style={{ maxWidth: 360 }}>
					Harness the deep liquidity of synthetic assets to power a new era of financial tools.
				</SectionDescription>
				<BuildButton buttonType="secondary" link="https://docs.synthetix.io/">
					Build
				</BuildButton>
			</Right>
		</Columns>
		<Line />
	</BuildContainer>
);

const BuildContainer = styled(Section)`
	min-height: 891px;

	display: flex;
	justify-content: center;
	align-items: center;

	${media.lessThan('large')`
		padding: 0 76px;
		min-height: 742px;
	`}
`;

const Columns = styled.div`
	width: 100%;
	height: 100%;
	max-width: 1160px;
	margin-top: 4px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	${media.lessThan('medium')`
		flex-direction: column;
		margin-top: 40px;
		justify-content: flex-start;
	`}
`;

const Left = styled.div`
	position: relative;
	text-align: center;
	left: -49px;
	${media.lessThan('large')`
		left: -89px;
	`}
	${media.lessThan('medium')`
		left: auto;
		position: relative;
	`}
`;
const Right = styled.div`
	${media.lessThan('large')`
		margin-left: -49px;
	`}

	${media.lessThan('medium')`
		margin-left: 0;
		text-align: center;
		margin-top: 58px;
		margin-bottom: 80px;
	`}
`;

const GlowingBuildCircle = styled.div`
	filter: drop-shadow(0px 0px 25.9037px rgba(0, 209, 255, 0.63));
	width: 718px;
	height: 718px;
	background-size: cover;
	background-position: center center;
	background-image: url('/home/build-circle.svg');
	background-repeat: no-repeat;

	${media.lessThan('medium')`
		background-image: url('/home/build-circle-mobile.svg');
		height: 298px;
		width: 298px;
	`}
`;

const BuildButton = styled(Button)`
	margin-top: 54px;
	width: 147px;
	height: 56px;
`;

export default BuildSection;
