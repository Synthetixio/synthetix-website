import { useState } from 'react';
import { ArrowPath } from 'src/components';
import ArrowWrapper from 'src/components/ArrowWrapper';
import { FlexDiv, FlexDivCol, PageTitle, Section, Subline } from 'src/styles/common';
import SvgPlus from 'src/svg/Plus';
import styled from 'styled-components';

export default function GovernanceMain() {
	const [activeArrowIds, setActiveArrowIds] = useState(['', '']);
	const handleOnArrowClick = (ids: string[]) => {
		if (!activeArrowIds.includes(ids[0]) && !activeArrowIds.includes(ids[1])) {
			setActiveArrowIds(ids);
		} else {
			setActiveArrowIds(['', '']);
		}
	};

	return (
		<GovernanceSection>
			<PageTitle>Governance</PageTitle>
			<StyledGovernanceSubline>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl ut uices a cras netus. Ut erat
				viverra turpis sed nunc netus laoreet ut enim. Elit, id sit magna nec libero mollis
				elementum risus quis. Nisl enim viverra phasellus ornare quis amet cursus gravida ac.
			</StyledGovernanceSubline>
			<GraphContentWrapper>
				{/* FIRST ROW */}

				<Row rowNumber={1}>
					<DAOWrapper>
						<DAODescription alignItems="end">
							<DAODutiesCircle
								id="sips-author"
								addMarginBottom
								focus={activeArrowIds.includes('sips-author')}
							>
								Author SIPs / SCCPs
							</DAODutiesCircle>
							<span>Stake SNX</span>
							<DAODutiesCircle
								addMarginTop
								id="propose-grants"
								focus={activeArrowIds.includes('propose-grants')}
							>
								Propose Grants
							</DAODutiesCircle>
						</DAODescription>
						<DAOCircle id="snx-community" focus={activeArrowIds.includes('snx-community')}>
							<DAOPlusSignWrapper position="top">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText bold>SNX</StyledText>
							<StyledText>Community</StyledText>
							<DAOActionCircle>Elect Members</DAOActionCircle>
						</DAOCircle>
					</DAOWrapper>
					<DAOWrapper style={{ marginLeft: '64px' }} id="core-contributors">
						<DAOCircle focus={activeArrowIds.includes('core-contributors')}>
							<DAOPlusSignWrapper position="top">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText bold>CORE</StyledText>
							<StyledText>Contributors</StyledText>
							<DAOActionCircle
								id="elect-committee"
								focus={activeArrowIds.includes('elect-committee')}
							>
								Elect Committee
							</DAOActionCircle>
						</DAOCircle>
						<DAODescription>
							<span>Signal Priorities</span>
							<DAODutiesCircle
								addMarginBottom
								addMarginTop
								id="implement-sips"
								focus={activeArrowIds.includes('implement-sips')}
							>
								Implements SIPs / SCCPs
							</DAODutiesCircle>
							<span>Protocol Work</span>
							<DAODutiesCircle
								addMarginTop
								id="vouch-for-cc"
								focus={activeArrowIds.includes('vouch-for-cc')}
							>
								Vouch for Potential CC
							</DAODutiesCircle>
						</DAODescription>
					</DAOWrapper>
				</Row>

				{/* SECOND ROW */}

				<Row rowNumber={2}>
					<DAOWrapper first>
						<DAODescription alignItems="end">
							<DAODutiesCircle
								addMarginBottom
								id="vote-sips"
								focus={activeArrowIds.includes('vote-sips')}
							>
								Vote on SIPs / SCCPs
							</DAODutiesCircle>
							<DAODutiesCircle
								style={{ textAlign: 'end' }}
								id="feasibility-risk"
								focus={activeArrowIds.includes('feasibility-risk')}
							>
								Feasibility & Risk Assessment <br /> on SIPs / SCCPs
							</DAODutiesCircle>
						</DAODescription>
						<CommitteeCircle
							edge="right"
							focus={activeArrowIds.includes('spartan-council-plus-sign')}
						>
							<DAOPlusSignWrapper position="bottomRight" id="spartan-council-plus-sign">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText color="white">Spartan</StyledText>
							<StyledText color="white" bold>
								COUNCIL
							</StyledText>
							<ArrowLabel
								color="green"
								top="50%"
								left="90%"
								id="spartan-council-arrow-label"
								focus={activeArrowIds.includes('spartan-council-arrow-label')}
							>
								Induct Members
							</ArrowLabel>
						</CommitteeCircle>
					</DAOWrapper>
					<DAOWrapper>
						<CommitteeCircle
							edge="left"
							id="core-contributor-committee"
							focus={
								activeArrowIds.includes('core-contributor-committee') ||
								activeArrowIds.includes('core-contributor-committee-plus-sign')
							}
						>
							<DAOPlusSignWrapper position="bottomLeft" id="core-contributor-committee-plus-sign">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText bold color="white">
								CORE
							</StyledText>
							<StyledText color="white">Contributor</StyledText>
							<StyledText color="white">Committee</StyledText>
						</CommitteeCircle>
						<DAODescription>
							<span>Manage CC Pay Packages</span>
							<span>Manage CC Roadmap & Vision</span>
							<span>Negotiate Partnerships</span>
							<DAODutiesCircle addMarginTop id="hire-cc" focus={activeArrowIds.includes('hire-cc')}>
								Hire Core Contributors
							</DAODutiesCircle>
						</DAODescription>
					</DAOWrapper>
				</Row>

				{/* THIRD ROW */}

				<Row rowNumber={3}>
					<DAOWrapper first>
						<DAODescription>
							<DAODescription>Manage Ecosystem Governance</DAODescription>
							<DAODescription>Ecosystem Governance Participation</DAODescription>
							<DAODescription>Advocate Ecosystem Partnership</DAODescription>
						</DAODescription>
						<CommitteeCircle
							edge="right"
							focus={activeArrowIds.includes('ambassadors-council-plus-sign')}
						>
							<DAOPlusSignWrapper position="bottomRight" id="ambassadors-council-plus-sign">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText color="white">Ambassadors</StyledText>
							<StyledText color="white" bold>
								COUNCIL
							</StyledText>
						</CommitteeCircle>
					</DAOWrapper>
					<DAOWrapper>
						<CommitteeCircle
							edge="left"
							id="protocol-dao"
							focus={
								activeArrowIds.includes('protocol-dao') ||
								activeArrowIds.includes('protocol-dao-plus-sign')
							}
						>
							<DAOPlusSignWrapper position="bottomLeft" id="protocol-dao-plus-sign">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText color="white">protocol</StyledText>
							<StyledText color="white" bold>
								DAO
							</StyledText>
						</CommitteeCircle>
						<DAODescription>
							<DAODutiesCircle
								id="execute-sips"
								addMarginBottom
								focus={activeArrowIds.includes('execute-sips')}
							>
								Execute SIPs
							</DAODutiesCircle>
							<DAODutiesCircle id="execute-sccps" focus={activeArrowIds.includes('execute-sccps')}>
								Execute SCCPs
							</DAODutiesCircle>
						</DAODescription>
					</DAOWrapper>
				</Row>

				{/* FOURTH ROW */}

				<Row rowNumber={4}>
					<DAOWrapper first>
						<DAODescription>
							<DAODescription>Sponsor Ecosystem Events</DAODescription>
							<DAODescription>Create Initiatives</DAODescription>
							<DAODutiesCircle
								id="review-grant-submissions"
								focus={activeArrowIds.includes('review-grant-submissions')}
							>
								Review Grant Submissions
							</DAODutiesCircle>
						</DAODescription>
						<CommitteeCircle
							edge="right"
							id="grants-dao"
							focus={
								activeArrowIds.includes('grants-dao-plus-sign') ||
								activeArrowIds.includes('grants-dao')
							}
						>
							<DAOPlusSignWrapper position="bottomRight" id="grants-dao-plus-sign">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText color="white">grants</StyledText>
							<StyledText color="white" bold>
								DAO
							</StyledText>
							<ArrowLabel color="cyan" top="130px" left="-15px">
								Pay Contributors
							</ArrowLabel>
						</CommitteeCircle>
					</DAOWrapper>
					<DAOWrapper>
						<CommitteeCircle
							edge="left"
							focus={activeArrowIds.includes('risk-committee-plus-sign')}
						>
							<DAOPlusSignWrapper position="bottomLeft" id="risk-committee-plus-sign">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText color="white">Risk</StyledText>
							<StyledText color="white" bold>
								COMMITTEE
							</StyledText>
						</CommitteeCircle>
						<DAODescription>
							<DAODescription>Execute SIPs</DAODescription>
							<DAODutiesCircle
								id="reviewing-sips"
								focus={activeArrowIds.includes('reviewing-sips')}
							>
								Reviewing SIPs Risk
							</DAODutiesCircle>
						</DAODescription>
					</DAOWrapper>
				</Row>

				{/* FIFTH ROW */}

				<Row rowNumber={5}>
					<DAOWrapper lastRow>
						<DAODescription alignItems="end">
							<DAODutiesCircle
								addMarginBottom
								id="work-on-grants"
								focus={activeArrowIds.includes('work-on-grants')}
							>
								Work on Grants
							</DAODutiesCircle>
							<DAODutiesCircle
								addMarginBottom
								id="community-propose-grants"
								focus={activeArrowIds.includes('community-propose-grants')}
							>
								Propose Grants
							</DAODutiesCircle>
							<span>Work on Initiatives</span>
						</DAODescription>
						<DAOCircle
							id="community-contributors"
							focus={activeArrowIds.includes('community-contributors')}
						>
							<StyledText bold>COMMUNITY</StyledText>
							<StyledText>Contributors</StyledText>
						</DAOCircle>
					</DAOWrapper>
					<DAOWrapper>
						<CommitteeCircle
							edge="topLeft"
							focus={activeArrowIds.includes('treasury-council-plus-sign')}
						>
							<DAOPlusSignWrapper position="topLeft" id="treasury-council-plus-sign">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText color="white">Treasury</StyledText>
							<StyledText color="white" bold>
								COUNCIL
							</StyledText>
							<ArrowLabel color="cyan" top="-40px" left="-40px">
								Provides Budget & Funding
							</ArrowLabel>
						</CommitteeCircle>
						<DAODescription>
							<DAODescription>Manage Treasury</DAODescription>
							<DAODescription>Fund Incentives</DAODescription>
							<DAODescription>Strategy & Deal Making</DAODescription>
						</DAODescription>
					</DAOWrapper>
				</Row>
				<ArrowWrapper width={900} height={750}>
					<ArrowPath
						startPosition={{ id: 'elect-committee', position: 'left' }}
						endPosition={{
							id: 'core-contributor-committee',
							position: 'left',
						}}
						edges={[
							{
								x: -20,
								y: 'heightAsStartEl',
							},
							{
								x: 0,
								y: 'heightAsEndEl',
							},
						]}
						hideCircle
						onClick={() => handleOnArrowClick(['elect-committee', 'core-contributor-committee'])}
						color="green"
					/>

					<ArrowPath
						startPosition={{ id: 'spartan-council-arrow-label', position: 'right' }}
						endPosition={{
							id: 'protocol-dao',
							position: 'left',
						}}
						edges={[
							{
								x: 10,
								y: 'heightAsStartEl',
							},
							{
								x: 0,
								y: 'heightAsEndEl',
							},
						]}
						hideCircle
						onClick={() => handleOnArrowClick(['spartan-council-arrow-label', 'protocol-dao'])}
						color="green"
					/>

					<ArrowPath
						startPosition={{ id: 'grants-dao', position: 'bottom' }}
						endPosition={{
							id: 'community-contributors',
							position: 'top',
						}}
						onClick={() => handleOnArrowClick(['grants-dao', 'community-contributors'])}
						color="cyan"
						hideCircle
					/>

					<ArrowPath
						startPosition={{ id: 'feasibility-risk', position: 'bottom' }}
						endPosition={{
							id: 'core-contributors',
							position: 'left',
						}}
						edges={[
							{ x: 0, y: 30 },
							{ x: 350, y: 0 },
							{ x: 0, y: 'heightAsEndEl' },
						]}
						onClick={() => handleOnArrowClick(['feasibility-risk', 'core-contributors'])}
					/>

					<ArrowPath
						startPosition={{ id: 'review-grant-submissions', position: 'bottom' }}
						endPosition={{
							id: 'work-on-grants',
							position: 'top',
						}}
						edges={[
							{ x: 0, y: 50 },
							{ x: 63, y: 0 },
						]}
						onClick={() => handleOnArrowClick(['work-on-grants', 'review-grant-submissions'])}
					/>

					<ArrowPath
						startPosition={{ id: 'community-propose-grants', position: 'left' }}
						endPosition={{
							id: 'review-grant-submissions',
							position: 'bottom',
						}}
						edges={[{ x: 0, y: 'heightAsStartEl' }]}
						onClick={() =>
							handleOnArrowClick(['community-propose-grants', 'review-grant-submissions'])
						}
					/>

					<ArrowPath
						startPosition={{ id: 'propose-grants', position: 'left' }}
						endPosition={{
							id: 'review-grant-submissions',
							position: 'left',
						}}
						edges={[
							{ x: 'endLeft', y: 'heightAsStartEl' },
							{ x: 'endLeft', y: 'heightAsEndEl' },
						]}
						onClick={() => handleOnArrowClick(['propose-grants', 'review-grant-submissions'])}
					/>

					<ArrowPath
						startPosition={{ id: 'reviewing-sips', position: 'right' }}
						endPosition={{
							id: 'feasibility-risk',
							position: 'left',
						}}
						edges={[
							{ x: 'endRight', y: 0 },
							{ x: 0, y: -90 },
							{ x: 'endLeft', y: 0 },
							{ x: 0, y: 'heightAsEndEl' },
						]}
						onClick={() => handleOnArrowClick(['reviewing-sips', 'feasibility-risk'])}
					/>

					<ArrowPath
						startPosition={{ id: 'implement-sips', position: 'right' }}
						endPosition={{
							id: 'execute-sips',
							position: 'right',
						}}
						edges={[
							{ x: 'endRight', y: 'heightAsStartEl' },
							{ x: 'endRight', y: 'heightAsEndEl' },
						]}
						onClick={() => handleOnArrowClick(['implement-sips', 'execute-sips'])}
					/>

					<ArrowPath
						startPosition={{ id: 'implement-sips', position: 'right' }}
						endPosition={{
							id: 'execute-sccps',
							position: 'right',
						}}
						edges={[
							{ x: 'endRight', y: 0 },
							{ x: 'endRight', y: 'heightAsEndEl' },
						]}
						onClick={() => handleOnArrowClick(['implement-sips', 'execute-sccps'])}
					/>

					<ArrowPath
						startPosition={{ id: 'implement-sips', position: 'right' }}
						endPosition={{
							id: 'vote-sips',
							position: 'left',
						}}
						edges={[
							{ x: 'endRight', y: 0 },
							{ x: 'endRight', y: 90 },
							{ x: 'endLeft', y: 0 },
							{ x: 0, y: 'heightAsEndEl' },
						]}
						onClick={() => handleOnArrowClick(['implement-sips', 'vote-sips'])}
					/>

					<ArrowPath
						startPosition={{ id: 'vouch-for-cc', position: 'right' }}
						endPosition={{
							id: 'hire-cc',
							position: 'right',
						}}
						edges={[
							{ x: 'endRight', y: 0 },
							{ x: 'endRight', y: 'heightAsEndEl' },
						]}
						onClick={() => handleOnArrowClick(['vouch-for-cc', 'hire-cc'])}
					/>

					<ArrowPath
						startPosition={{ id: 'sips-author', position: 'left' }}
						endPosition={{
							id: 'feasibility-risk',
							position: 'left',
						}}
						edges={[
							{ x: 'endLeft', y: 0 },
							{ x: 'endLeft', y: 'heightAsEndEl' },
						]}
						onClick={() => handleOnArrowClick(['sips-author', 'feasibility-risk'])}
					/>

					{/* Main Arrows */}

					<ArrowPath
						mainArrow
						color="pink"
						startPosition={{ id: 'snx-community', position: 'bottom' }}
						endPosition={{
							id: 'treasury-council-plus-sign',
							position: 'left',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() => handleOnArrowClick(['snx-community', 'treasury-council-plus-sign'])}
					/>

					<ArrowPath
						mainArrow
						color="pink"
						startPosition={{ id: 'snx-community', position: 'bottom' }}
						endPosition={{
							id: 'spartan-council-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() => handleOnArrowClick(['snx-community', 'spartan-council-plus-sign'])}
					/>

					<ArrowPath
						mainArrow
						color="pink"
						startPosition={{ id: 'snx-community', position: 'bottom' }}
						endPosition={{
							id: 'ambassadors-council-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() => handleOnArrowClick(['snx-community', 'ambassadors-council-plus-sign'])}
					/>
					<ArrowPath
						mainArrow
						color="pink"
						startPosition={{ id: 'snx-community', position: 'bottom' }}
						endPosition={{
							id: 'grants-dao-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() => handleOnArrowClick(['snx-community', 'grants-dao-plus-sign'])}
					/>

					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{ id: 'treasury-council-plus-sign', position: 'top' }}
						endPosition={{
							id: 'grants-dao-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() =>
							handleOnArrowClick(['treasury-council-plus-sign', 'grants-dao-plus-sign'])
						}
					/>

					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{ id: 'treasury-council-plus-sign', position: 'top' }}
						endPosition={{
							id: 'ambassadors-council-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() =>
							handleOnArrowClick(['treasury-council-plus-sign', 'ambassadors-council-plus-sign'])
						}
					/>

					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{ id: 'treasury-council-plus-sign', position: 'top' }}
						endPosition={{
							id: 'spartan-council-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() =>
							handleOnArrowClick(['treasury-council-plus-sign', 'spartan-council-plus-sign'])
						}
					/>
					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{ id: 'treasury-council-plus-sign', position: 'top' }}
						endPosition={{
							id: 'risk-committee-plus-sign',
							position: 'left',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() =>
							handleOnArrowClick(['treasury-council-plus-sign', 'risk-committee-plus-sign'])
						}
					/>
					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{ id: 'treasury-council-plus-sign', position: 'top' }}
						endPosition={{
							id: 'protocol-dao-plus-sign',
							position: 'left',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() =>
							handleOnArrowClick(['treasury-council-plus-sign', 'protocol-dao-plus-sign'])
						}
					/>
					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{ id: 'treasury-council-plus-sign', position: 'top' }}
						endPosition={{
							id: 'core-contributor-committee-plus-sign',
							position: 'left',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						onClick={() =>
							handleOnArrowClick([
								'treasury-council-plus-sign',
								'core-contributor-committee-plus-sign',
							])
						}
					/>
				</ArrowWrapper>
			</GraphContentWrapper>
		</GovernanceSection>
	);
}

const GovernanceSection = styled(Section)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 24px;
`;

const StyledGovernanceSubline = styled(Subline)`
	text-align: center;
`;

const GraphContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 900px;
	overflow: scroll visible;
	position: relative;
	padding: 32px 24px;
`;

const Row = styled(FlexDiv)<{ rowNumber: number }>`
	margin-bottom: 24px;
	${({ rowNumber }) => {
		switch (rowNumber) {
			case 1:
				return 'margin-left: auto;';
			case 2:
			case 3:
			case 4:
				return 'width: 100%;';
			case 5:
				return 'justify-content: start; width: 100%; margin-top: 50px;';
			default:
				return 'justify-content: start; width: 100%';
		}
	}}
`;

const DAOCircle = styled.div<{ focus?: boolean }>`
	position: relative;
	border: 5px solid ${({ theme }) => theme.colors.pink};
	width: 110px;
	height: 110px;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 8px;
	background-color: #1d1d3d;
	transition: all 200ms linear;
	${({ theme, focus }) => (focus ? `box-shadow: 0px 0px 20px ${theme.colors.pink}` : '')};
`;

const CommitteeCircle = styled.div<{
	edge: 'left' | 'right' | 'topLeft';
	first?: boolean;
	focus?: boolean;
}>`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	background-color: #1d1d3d;
	min-width: 110px;
	min-height: 110px;
	border: 3px solid ${({ theme }) => theme.colors.cyan};
	transition: all 200ms linear;
	${({ theme, focus }) => (focus ? `box-shadow: 0px 0px 20px ${theme.colors.cyan}` : '')};
	${({ first }) => (first ? 'margin-right: auto;' : '')}
	${({ edge }) => {
		if (edge === 'right') {
			return 'border-radius: 50% 50% 0;';
		} else if (edge === 'left') {
			return 'border-radius: 50% 50% 50% 0;';
		} else {
			return 'border-radius: 0 50% 50% 50%;';
		}
	}}
`;

const DAOActionCircle = styled.div<{ focus?: boolean }>`
	height: 20px;
	width: fit-content;
	border-radius: 10px;
	padding: 0px 8px;
	white-space: nowrap;
	font-size: 12px;
	text-align: center;
	border: 1px solid ${({ theme }) => theme.colors.green};
	background-color: ${({ theme }) => theme.colors.bgBlack};
	transition: all 200ms linear;
	${({ theme, focus }) => (focus ? `box-shadow: 0px 0px 20px ${theme.colors.green}` : '')};
`;

const DAOPlusSignWrapper = styled.div<{
	position?: 'top' | 'bottomRight' | 'bottomLeft' | 'topLeft';
}>`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	border-radius: 50%;
	z-index: 10;
	background-color: ${({ theme }) => theme.colors.cyan};
	${({ position }) => {
		if (position === 'top') {
			return `
			top: -12px;
			right: 36px;
			width: 24px;
			height: 24px;
			`;
		} else if (position === 'bottomRight') {
			return `
			bottom: -11px;
			right: -13px;
			width: 24px;
			height: 24px;
			`;
		} else if (position === 'topLeft') {
			return `
			top: -12px;
			left: -14px;
			width: 24px;
			height: 24px;
			`;
		} else {
			return `
			bottom: -11px;
			left: -13px;
			width: 24px;
			height: 24px;
			`;
		}
	}}
`;

const DAODutiesCircle = styled.div<{
	addMarginBottom?: boolean;
	addMarginTop?: boolean;
	focus?: boolean;
}>`
	border: 1px solid ${({ theme }) => theme.colors.lightViolet};
	width: fit-content;
	color: ${({ theme }) => theme.colors.lightViolet};
	background-color: ${({ theme }) => theme.colors.bgBlack};
	border-radius: 10px;
	padding: 2px 8px;
	font-size: 11px;
	margin-bottom: ${({ addMarginBottom }) => (addMarginBottom ? '8px' : '0px')};
	margin-top: ${({ addMarginTop }) => (addMarginTop ? '8px' : '0px')};
	transition: all 200ms linear;
	${({ theme, focus }) => (focus ? `box-shadow: 0px 0px 20px ${theme.colors.cyan}` : '')};
`;

const DAODescription = styled(FlexDivCol)<{ alignItems?: 'end' | 'start' }>`
	align-items: ${({ alignItems }) => (alignItems === 'end' ? 'flex-end' : 'flex-start')};
	min-width: 190px;
	font-size: 11px;
`;

const StyledText = styled.span<{ bold?: boolean; color?: 'pink' | 'white' }>`
	color: ${({ theme, color }) => (color === 'white' ? 'white' : theme.colors.pink)};
	font-weight: ${({ bold }) => (bold ? 900 : 0)};
`;

const DAOWrapper = styled(FlexDiv)<{ first?: boolean; lastRow?: boolean }>`
	align-items: center;
	height: 110px;
	margin-bottom: 20px;
	border-radius: 5px;
	transition: all 300ms ease-in-out;
	width: auto;
	${({ first }) => (first ? 'margin-right: auto;' : '')}
	${({ lastRow }) => (lastRow ? 'margin-right: 110px;' : '')}
	> * {
		margin-right: 16px;
	}
`;

const ArrowLabel = styled.div<{
	color?: 'cyan' | 'pink' | 'green';
	top?: string;
	left?: string;
	focus?: boolean;
}>`
	position: absolute;
	top: ${({ top }) => (top ? top : '0px')};
	left: ${({ left }) => (left ? left : '0px')};
	background-color: ${({ theme }) => theme.colors.bgBlack};
	border-radius: 10px;
	width: fit-content;
	padding: 0px 8px;
	border: 1px solid
		${({ color, theme }) => (color ? theme.colors[color] : theme.colors.lightViolet)};
	z-index: 10;
	white-space: nowrap;
	font-size: 11px;
	transition: all 200ms linear;
	${({ theme, focus }) => (focus ? `box-shadow: 0px 0px 20px ${theme.colors.green}` : '')};
`;
