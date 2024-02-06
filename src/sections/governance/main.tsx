import { useEffect, useState } from 'react';
import {
	ExternalLink,
	FlexDiv,
	FlexDivCentered,
	FlexDivCol,
	PageTitle,
	Section,
	SectionTitle,
	Subline,
} from 'src/styles/common';
import Ellipse from 'src/svg/Ellipse';
import LinkOffIcon from 'src/svg/LinkOffIcon';
import SvgPlus from 'src/svg/Plus';
import { CyanSpotlight, PinkSpotLight } from 'src/svg/Spotlights';
import styled from 'styled-components';
import { StyledButtonWrapperLinearGradient } from './furtherLinking';
import { ArrowPath, ArrowWrapper } from 'src/components';

export default function GovernanceMain() {
	const [activeArrowIds, setActiveArrowIds] = useState(['']);

	const setActiveArrows = (ids: string[]) => {
		setActiveArrowIds(['']);
		// trigger animation from the beginning
		setTimeout(() => {
			setActiveArrowIds(ids);
		}, 1);
	};

	useEffect(() => {
		if (window?.innerWidth < 940 && !!document) {
			if (document.getElementsByTagName('meta').item(0)?.content)
				document.getElementsByTagName('meta').item(0)!.content = 'width=940px';
		}
	}, []);

	return (
		<GovernanceSection customMaxWidth>
			<BackgroundImageWrapper>
				<StyledEllipse />
				<StyledPinkSpotLight />
				<StyledCyanSpotlight />
				<GovernancePageTitle>Governance</GovernancePageTitle>
				<StyledGovernanceSubline>
					Synthetix protocol is governed, maintained and built by a combination
					of community members, core contributors, and several elected
					committees and councils that are voted on by SNX stakers. Learn more
					about how these governing bodies interact, what they&apos;re
					responsible for, and how they influence protocol improvements via
					SIPs, SCCPs and other work.
				</StyledGovernanceSubline>
				<FlexDivCentered>
					<StyledButtonWrapperLinearGradient height="124px" margin="16px">
						<StyledLinkButtons href="https://governance.synthetix.io/councils">
							<StyledButtonLabel>COUNCIL MEMBERS</StyledButtonLabel>
							<StyledButtonText>
								View the history of past council elections <br /> and vote in
								any currently open elections.
							</StyledButtonText>
							<StyledLinkOffIcon />
						</StyledLinkButtons>
					</StyledButtonWrapperLinearGradient>
					<StyledButtonWrapperLinearGradient height="124px" margin="16px">
						<StyledLinkButtons href="https://sips.synthetix.io/all-sip/">
							<StyledButtonLabel>SYNTHETIX SCCP/SIP</StyledButtonLabel>
							<StyledButtonText>
								View the current status of all SCCPs <br />
								and SIPs.
							</StyledButtonText>
							<StyledLinkOffIcon />
						</StyledLinkButtons>
					</StyledButtonWrapperLinearGradient>
				</FlexDivCentered>
				<FlexDivCentered style={{ marginBottom: '52px' }}>
					<StyledButtonWrapperLinearGradient height="124px" margin="16px">
						<StyledLinkButtons href="https://discord.com/invite/ptfNSByB8P">
							<StyledButtonLabel>SYNTHETIX FORUM</StyledButtonLabel>
							<StyledButtonText>
								Join the community governance discussion <br /> in realtime.
							</StyledButtonText>
							<StyledLinkOffIcon />
						</StyledLinkButtons>
					</StyledButtonWrapperLinearGradient>
					<StyledButtonWrapperLinearGradient height="124px" margin="16px">
						<StyledLinkButtons href="https://gov.synthetix.io/#/">
							<StyledButtonLabel>SCCP / SIP VOTING RECORDS</StyledButtonLabel>
							<StyledButtonText>
								View the voting history of all <br /> governance proposals.
							</StyledButtonText>
							<StyledLinkOffIcon />
						</StyledLinkButtons>
					</StyledButtonWrapperLinearGradient>
				</FlexDivCentered>
			</BackgroundImageWrapper>
			<SectionTitle>Governance Structure</SectionTitle>
			<StyledGovernanceSubline style={{ marginBottom: '40px' }}>
				The Synthetix governance structure is composed of Councils, Committees,
				Core Contributors and a DAO. Each governance component is assigned a
				specific aspect of protocol governance. Councils are directly elected by
				SNX stakers, while other governance bodies are appointed according to
				the existing governance procedures. All of the components work together
				to ensure that the protocol is governed in a fair, transparent and
				legitimate way in accordance with the direction provided by token
				holders.
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
								onClick={() =>
									setActiveArrows([
										'sips-author',
										'feasibility-risk',
										'snx-community',
										'spartan-council-plus-sign',
									])
								}
							>
								Author SIPs / SCCPs
							</DAODutiesCircle>
							<span>Stake SNX</span>
							<DAODutiesCircle
								addMarginTop
								id="propose-grants"
								focus={activeArrowIds.includes('propose-grants')}
								onClick={() =>
									setActiveArrows([
										'propose-grants',
										'review-grant-submissions',
										'snx-community',
										'grants-dao',
									])
								}
							>
								Propose Grants
							</DAODutiesCircle>
						</DAODescription>
						<DAOCircle
							id="snx-community"
							focus={activeArrowIds.includes('snx-community')}
							onClick={() =>
								setActiveArrows([
									'treasury-council-plus-sign',
									'snx-community',
									'spartan-council-plus-sign',
									'ambassadors-council-plus-sign',
									'grants-dao',
									'propose-grants',
									'sips-author',
									'feasibility-risk',
									'review-grant-submissions',
									'snx-community-treasury-council-plus-sign-main-arrow',
									'snx-community-spartan-council-plus-sign-main-arrow',
									'snx-community-ambassadors-council-plus-sign-main-arrow',
									'snx-community-grants-dao-main-arrow',
								])
							}
						>
							<DAOPlusSignWrapper position="top">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText bold>SNX</StyledText>
							<StyledText>Community</StyledText>
							<DAOActionCircle>Elect Members</DAOActionCircle>
						</DAOCircle>
					</DAOWrapper>
					<DAOWrapper style={{ marginLeft: '64px' }}>
						<DAOCircle
							focus={activeArrowIds.includes('core-contributors')}
							id="core-contributors"
							onClick={e => {
								setActiveArrows([
									'implement-sips',
									'core-contributors',
									'feasibility-risk',
									'vouch-for-cc',
									'execute-sccps',
									'execute-sips',
									'vote-sips',
									'hire-cc',
									'core-contributor-committee',
									'protocol-dao',
									'spartan-council-plus-sign',
									'pay-cc',
									'elect-committee',
								]);
							}}
						>
							<DAOPlusSignWrapper position="top">
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText bold>CORE</StyledText>
							<StyledText>Contributors</StyledText>
							<DAOActionCircle
								id="elect-committee"
								focus={activeArrowIds.includes('elect-committee')}
								onClick={() =>
									setActiveArrows([
										'implement-sips',
										'core-contributors',
										'feasibility-risk',
										'vouch-for-cc',
										'execute-sccps',
										'execute-sips',
										'vote-sips',
										'hire-cc',
										'core-contributor-committee',
										'protocol-dao',
										'spartan-council-plus-sign',
										'pay-cc',
										'elect-committee',
									])
								}
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
								onClick={() =>
									setActiveArrows([
										'implement-sips',
										'vote-sips',
										'execute-sips',
										'execute-sccps',
										'core-contributors',
										'spartan-council-plus-sign',
									])
								}
							>
								Implements SIPs / SCCPs
							</DAODutiesCircle>
							<span>Protocol Work</span>
							<DAODutiesCircle
								addMarginTop
								id="vouch-for-cc"
								focus={activeArrowIds.includes('vouch-for-cc')}
								onClick={() =>
									setActiveArrows([
										'vouch-for-cc',
										'hire-cc',
										'core-contributors',
										'core-contributor-committee',
									])
								}
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
								onClick={() =>
									setActiveArrows([
										'spartan-council-plus-sign',
										'vote-sips',
										'implement-sips',
										'core-contributors',
									])
								}
							>
								Vote on SIPs / SCCPs
							</DAODutiesCircle>
							<DAODutiesCircle
								style={{ textAlign: 'end' }}
								id="feasibility-risk"
								focus={activeArrowIds.includes('feasibility-risk')}
								onClick={() =>
									setActiveArrows([
										'core-contributors',
										'feasibility-risk',
										'sips-author',
										'snx-community',
										'spartan-council-plus-sign',
										'reviewing-sips',
										'risk-committee-plus-sign',
									])
								}
							>
								Feasibility & Risk Assessment <br /> on SIPs / SCCPs
							</DAODutiesCircle>
						</DAODescription>
						<CommitteeCircle
							edge="right"
							focus={activeArrowIds.includes('spartan-council-plus-sign')}
							onClick={() =>
								setActiveArrows([
									'spartan-council-plus-sign',
									'snx-community',
									'treasury-council-plus-sign',
									'vote-sips',
									'implement-sips',
									'feasibility-risk',
									'core-contributors',
									'sips-author',
									'reviewing-sips',
									'risk-committee-plus-sign',
									'budget-funding',
									'snx-community-spartan-council-plus-sign-main-arrow',
									'treasury-council-plus-sign-spartan-council-plus-sign-main-arrow',
									'spartan-council-arrow-label',
									'protocol-dao',
								])
							}
						>
							<DAOPlusSignWrapper
								position="bottomRight"
								id="spartan-council-plus-sign"
							>
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
								onClick={e => {
									e.stopPropagation();
									setActiveArrows([
										'spartan-council-plus-sign',
										'snx-community',
										'treasury-council-plus-sign',
										'vote-sips',
										'implement-sips',
										'feasibility-risk',
										'core-contributors',
										'sips-author',
										'reviewing-sips',
										'risk-committee-plus-sign',
										'budget-funding',
										'snx-community-spartan-council-plus-sign-main-arrow',
										'treasury-council-plus-sign-spartan-council-plus-sign-main-arrow',
										'spartan-council-arrow-label',
										'protocol-dao',
									]);
								}}
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
							onClick={() =>
								setActiveArrows([
									'core-contributor-committee',
									'core-contributors',
									'pay-cc',
									'hire-cc',
									'vouch-for-cc',
									'treasury-council-plus-sign',
									'budget-funding',
									'treasury-council-plus-sign-core-contributor-committee-plus-sign-main-arrow',
									'elect-committee',
								])
							}
						>
							<ArrowLabel
								color="cyan"
								top="-35px"
								focus={activeArrowIds.includes('pay-cc')}
								onClick={() => {
									setActiveArrows([
										'core-contributor-committee-plus-sign',
										'core-contributors',
										'pay-cc',
										'elect-committee',
									]);
								}}
							>
								Pay Contributors
							</ArrowLabel>
							<DAOPlusSignWrapper
								position="bottomLeft"
								id="core-contributor-committee-plus-sign"
							>
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
							<DAODutiesCircle
								addMarginTop
								id="hire-cc"
								focus={activeArrowIds.includes('hire-cc')}
								onClick={() =>
									setActiveArrows([
										'hire-cc',
										'vouch-for-cc',
										'core-contributor-committee',
									])
								}
							>
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
							<DAODescription>
								Ecosystem Governance Participation
							</DAODescription>
							<DAODescription>Advocate Ecosystem Partnership</DAODescription>
						</DAODescription>
						<CommitteeCircle
							edge="right"
							focus={activeArrowIds.includes('ambassadors-council-plus-sign')}
							onClick={() =>
								setActiveArrows([
									'ambassadors-council-plus-sign',
									'snx-community',
									'treasury-council-plus-sign',
									'budget-funding',
									'snx-community-ambassadors-council-plus-sign-main-arrow',
									'treasury-council-plus-sign-ambassadors-council-plus-sign-main-arrow',
								])
							}
						>
							<DAOPlusSignWrapper
								position="bottomRight"
								id="ambassadors-council-plus-sign"
							>
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
							onClick={() =>
								setActiveArrows([
									'protocol-dao',
									'execute-sips',
									'execute-sccps',
									'implement-sips',
									'treasury-council-plus-sign',
									'budget-funding',
									'treasury-council-plus-sign-protocol-dao-plus-sign-main-arrow',
									'spartan-council-arrow-label',
									'spartan-council-plus-sign',
								])
							}
						>
							<DAOPlusSignWrapper
								position="bottomLeft"
								id="protocol-dao-plus-sign"
							>
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
								onClick={() =>
									setActiveArrows([
										'execute-sips',
										'protocol-dao',
										'implement-sips',
									])
								}
							>
								Execute SIPs
							</DAODutiesCircle>
							<DAODutiesCircle
								id="execute-sccps"
								focus={activeArrowIds.includes('execute-sccps')}
								onClick={() =>
									setActiveArrows([
										'execute-sccps',
										'protocol-dao',
										'implement-sips',
									])
								}
							>
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
								addMarginTop
								id="review-grant-submissions"
								focus={activeArrowIds.includes('review-grant-submissions')}
								onClick={() =>
									setActiveArrows([
										'review-grant-submissions',
										'work-on-grants',
										'community-propose-grants',
										'propose-grants',
										'grants-dao',
										'community-contributors',
										'pay-contributors',
									])
								}
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
							onClick={() =>
								setActiveArrows([
									'grants-dao',
									'community-contributors',
									'pay-contributors',
									'review-grant-submissions',
									'propose-grants',
									'work-on-grants',
									'community-propose-grants',
									'snx-community',
									'treasury-council-plus-sign',
									'pay-contributors',
									'budget-funding',
									'snx-community-grants-dao-main-arrow',
									'treasury-council-plus-sign-grants-dao-main-arrow',
								])
							}
						>
							<DAOPlusSignWrapper
								position="bottomRight"
								id="grants-dao-plus-sign"
							>
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText color="white">grants</StyledText>
							<StyledText color="white" bold>
								COUNCIL
							</StyledText>
							<ArrowLabel
								color="cyan"
								top="130px"
								focus={activeArrowIds.includes('pay-contributors')}
								onClick={e => {
									e.stopPropagation();
									setActiveArrows([
										'grants-dao',
										'community-contributors',
										'pay-contributors',
										'review-grant-submissions',
										'propose-grants',
										'work-on-grants',
										'community-propose-grants',
										'snx-community',
										'treasury-council-plus-sign',
										'pay-contributors',
										'budget-funding',
										'snx-community-grants-dao-main-arrow',
										'treasury-council-plus-sign-grants-dao-main-arrow',
									]);
								}}
							>
								Pay Contributors
							</ArrowLabel>
						</CommitteeCircle>
					</DAOWrapper>
					<DAOWrapper>
						<CommitteeCircle
							edge="left"
							focus={activeArrowIds.includes('risk-committee-plus-sign')}
							onClick={() =>
								setActiveArrows([
									'risk-committee-plus-sign',
									'reviewing-sips',
									'feasibility-risk',
									'treasury-council-plus-sign',
									'budget-funding',
									'treasury-council-plus-sign-risk-committee-plus-sign-main-arrow',
								])
							}
						>
							<DAOPlusSignWrapper
								position="bottomLeft"
								id="risk-committee-plus-sign"
							>
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
								onClick={() =>
									setActiveArrows([
										'feasibility-risk',
										'reviewing-sips',
										'risk-committee-plus-sign',
									])
								}
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
								onClick={() =>
									setActiveArrows([
										'work-on-grants',
										'community-contributors',
										'review-grant-submissions',
									])
								}
							>
								Work on Grants
							</DAODutiesCircle>
							<DAODutiesCircle
								addMarginBottom
								id="community-propose-grants"
								focus={activeArrowIds.includes('community-propose-grants')}
								onClick={() =>
									setActiveArrows([
										'community-propose-grants',
										'review-grant-submissions',
										'community-contributors',
									])
								}
							>
								Propose Grants
							</DAODutiesCircle>
							<span>Work on Initiatives</span>
						</DAODescription>
						<DAOCircle
							id="community-contributors"
							focus={activeArrowIds.includes('community-contributors')}
							onClick={() =>
								setActiveArrows([
									'pay-contributors',
									'community-contributors',
									'grants-dao',
									'work-on-grants',
									'review-grant-submissions',
									'community-propose-grants',
								])
							}
						>
							<StyledText bold>COMMUNITY</StyledText>
							<StyledText>Contributors</StyledText>
						</DAOCircle>
					</DAOWrapper>
					<DAOWrapper>
						<CommitteeCircle
							edge="topLeft"
							focus={activeArrowIds.includes('treasury-council-plus-sign')}
							onClick={() =>
								setActiveArrows([
									'budget-funding',
									'spartan-council-plus-sign',
									'core-contributor-committee',
									'ambassadors-council-plus-sign',
									'protocol-dao',
									'grants-dao',
									'risk-committee-plus-sign',
									'treasury-council-plus-sign',
									'snx-community-treasury-council-plus-sign-main-arrow',
									'snx-community',
									'treasury-council-plus-sign-grants-dao-main-arrow',
									'treasury-council-plus-sign-ambassadors-council-plus-sign-main-arrow',
									'treasury-council-plus-sign-spartan-council-plus-sign-main-arrow',
									'treasury-council-plus-sign-risk-committee-plus-sign-main-arrow',
									'treasury-council-plus-sign-protocol-dao-plus-sign-main-arrow',
									'treasury-council-plus-sign-core-contributor-committee-plus-sign-main-arrow',
								])
							}
						>
							<DAOPlusSignWrapper
								position="topLeft"
								id="treasury-council-plus-sign"
							>
								<SvgPlus />
							</DAOPlusSignWrapper>
							<StyledText color="white">Treasury</StyledText>
							<StyledText color="white" bold>
								COUNCIL
							</StyledText>
							<ArrowLabel
								color="cyan"
								top="-40px"
								left="-40px"
								focus={activeArrowIds.includes('budget-funding')}
								onClick={() =>
									setActiveArrows([
										'budget-funding',
										'spartan-council-plus-sign',
										'core-contributor-committee',
										'ambassadors-council-plus-sign',
										'protocol-dao',
										'grants-dao',
										'risk-committee-plus-sign',
										'treasury-council-plus-sign',
										'snx-community-treasury-council-plus-sign-main-arrow',
										'snx-community',
										'treasury-council-plus-sign-grants-dao-main-arrow',
										'treasury-council-plus-sign-ambassadors-council-plus-sign-main-arrow',
										'treasury-council-plus-sign-spartan-council-plus-sign-main-arrow',
										'treasury-council-plus-sign-risk-committee-plus-sign-main-arrow',
										'treasury-council-plus-sign-protocol-dao-plus-sign-main-arrow',
										'treasury-council-plus-sign-core-contributor-committee-plus-sign-main-arrow',
									])
								}
							>
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
				<ArrowWrapper width={900} height={790}>
					<ArrowPath
						startPosition={{
							id: 'core-contributor-committee',
							position: 'top',
						}}
						endPosition={{
							id: 'core-contributors',
							position: 'bottom',
						}}
						hideCircle
						color="cyan"
						active={
							activeArrowIds.includes('core-contributor-committee') &&
							activeArrowIds.includes('core-contributors') &&
							activeArrowIds.includes('pay-cc')
						}
					/>

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
						color="green"
						active={
							activeArrowIds.includes('core-contributor-committee') &&
							activeArrowIds.includes('elect-committee')
						}
					/>

					<ArrowPath
						startPosition={{
							id: 'spartan-council-arrow-label',
							position: 'right',
						}}
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
						color="green"
						active={
							activeArrowIds.includes('spartan-council-arrow-label') &&
							activeArrowIds.includes('protocol-dao')
						}
					/>

					<ArrowPath
						startPosition={{ id: 'grants-dao', position: 'bottom' }}
						endPosition={{
							id: 'community-contributors',
							position: 'top',
						}}
						color="cyan"
						hideCircle
						active={
							activeArrowIds.includes('grants-dao') &&
							activeArrowIds.includes('community-contributors') &&
							activeArrowIds.includes('pay-contributors')
						}
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
						active={
							activeArrowIds.includes('feasibility-risk') &&
							activeArrowIds.includes('core-contributors')
						}
					/>

					<ArrowPath
						startPosition={{
							id: 'review-grant-submissions',
							position: 'bottom',
						}}
						endPosition={{
							id: 'work-on-grants',
							position: 'top',
						}}
						edges={[
							{ x: 0, y: 50 },
							{ x: 63, y: 0 },
						]}
						active={
							activeArrowIds.includes('review-grant-submissions') &&
							activeArrowIds.includes('work-on-grants')
						}
					/>

					<ArrowPath
						startPosition={{ id: 'community-propose-grants', position: 'left' }}
						endPosition={{
							id: 'review-grant-submissions',
							position: 'bottom',
						}}
						edges={[{ x: 0, y: 'heightAsStartEl' }]}
						active={
							activeArrowIds.includes('review-grant-submissions') &&
							activeArrowIds.includes('community-propose-grants')
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
						active={
							activeArrowIds.includes('review-grant-submissions') &&
							activeArrowIds.includes('propose-grants')
						}
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
						active={
							activeArrowIds.includes('reviewing-sips') &&
							activeArrowIds.includes('feasibility-risk')
						}
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
						active={
							activeArrowIds.includes('implement-sips') &&
							activeArrowIds.includes('execute-sips')
						}
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
						active={
							activeArrowIds.includes('implement-sips') &&
							activeArrowIds.includes('execute-sccps')
						}
					/>

					<ArrowPath
						startPosition={{ id: 'implement-sips', position: 'right' }}
						endPosition={{
							id: 'vote-sips',
							position: 'left',
						}}
						edges={[
							{ x: 20, y: 0 },
							{ x: 0, y: 90 },
							{ x: -800, y: 0 },
							{ x: 0, y: 'heightAsEndEl' },
						]}
						active={
							activeArrowIds.includes('implement-sips') &&
							activeArrowIds.includes('vote-sips')
						}
					/>

					<ArrowPath
						startPosition={{ id: 'vouch-for-cc', position: 'right' }}
						endPosition={{
							id: 'hire-cc',
							position: 'right',
						}}
						edges={[
							{ x: 20, y: 0 },
							{ x: 0, y: 'heightAsEndEl' },
						]}
						active={
							activeArrowIds.includes('vouch-for-cc') &&
							activeArrowIds.includes('hire-cc')
						}
					/>

					<ArrowPath
						startPosition={{ id: 'sips-author', position: 'left' }}
						endPosition={{
							id: 'feasibility-risk',
							position: 'left',
						}}
						edges={[
							{ x: -180, y: 0 },
							{ x: 0, y: 'heightAsEndEl' },
						]}
						active={
							activeArrowIds.includes('sips-author') &&
							activeArrowIds.includes('feasibility-risk')
						}
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
						active={
							activeArrowIds.includes('snx-community') &&
							activeArrowIds.includes('treasury-council-plus-sign') &&
							activeArrowIds.includes(
								'snx-community-treasury-council-plus-sign-main-arrow',
							)
						}
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
						active={
							activeArrowIds.includes('snx-community') &&
							activeArrowIds.includes('spartan-council-plus-sign') &&
							activeArrowIds.includes(
								'snx-community-spartan-council-plus-sign-main-arrow',
							)
						}
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
						active={
							activeArrowIds.includes('snx-community') &&
							activeArrowIds.includes('ambassadors-council-plus-sign') &&
							activeArrowIds.includes(
								'snx-community-ambassadors-council-plus-sign-main-arrow',
							)
						}
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
						active={
							activeArrowIds.includes('snx-community') &&
							activeArrowIds.includes('grants-dao') &&
							activeArrowIds.includes('snx-community-grants-dao-main-arrow')
						}
					/>

					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{
							id: 'treasury-council-plus-sign',
							position: 'top',
						}}
						endPosition={{
							id: 'grants-dao-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						active={
							activeArrowIds.includes('treasury-council-plus-sign') &&
							activeArrowIds.includes('grants-dao') &&
							activeArrowIds.includes(
								'treasury-council-plus-sign-grants-dao-main-arrow',
							)
						}
					/>

					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{
							id: 'treasury-council-plus-sign',
							position: 'top',
						}}
						endPosition={{
							id: 'ambassadors-council-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						active={
							activeArrowIds.includes('treasury-council-plus-sign') &&
							activeArrowIds.includes('ambassadors-council-plus-sign') &&
							activeArrowIds.includes(
								'treasury-council-plus-sign-ambassadors-council-plus-sign-main-arrow',
							)
						}
					/>

					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{
							id: 'treasury-council-plus-sign',
							position: 'top',
						}}
						endPosition={{
							id: 'spartan-council-plus-sign',
							position: 'right',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						active={
							activeArrowIds.includes('treasury-council-plus-sign') &&
							activeArrowIds.includes('spartan-council-plus-sign') &&
							activeArrowIds.includes(
								'treasury-council-plus-sign-spartan-council-plus-sign-main-arrow',
							)
						}
					/>
					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{
							id: 'treasury-council-plus-sign',
							position: 'top',
						}}
						endPosition={{
							id: 'risk-committee-plus-sign',
							position: 'left',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						active={
							activeArrowIds.includes('treasury-council-plus-sign') &&
							activeArrowIds.includes('risk-committee-plus-sign') &&
							activeArrowIds.includes(
								'treasury-council-plus-sign-risk-committee-plus-sign-main-arrow',
							)
						}
					/>
					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{
							id: 'treasury-council-plus-sign',
							position: 'top',
						}}
						endPosition={{
							id: 'protocol-dao-plus-sign',
							position: 'left',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						active={
							activeArrowIds.includes('treasury-council-plus-sign') &&
							activeArrowIds.includes('protocol-dao') &&
							activeArrowIds.includes(
								'treasury-council-plus-sign-protocol-dao-plus-sign-main-arrow',
							)
						}
					/>
					<ArrowPath
						mainArrow
						color="cyan"
						startPosition={{
							id: 'treasury-council-plus-sign',
							position: 'top',
						}}
						endPosition={{
							id: 'core-contributor-committee-plus-sign',
							position: 'left',
						}}
						edges={[{ x: 0, y: 'heightAsEndEl' }]}
						active={
							activeArrowIds.includes('treasury-council-plus-sign') &&
							activeArrowIds.includes('core-contributor-committee') &&
							activeArrowIds.includes(
								'treasury-council-plus-sign-core-contributor-committee-plus-sign-main-arrow',
							)
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
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
`;

const GovernancePageTitle = styled(PageTitle)`
	text-align: center;
	width: 100%;
`;

const BackgroundImageWrapper = styled.div`
	position: relative;
	padding-top: 116px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledEllipse = styled(Ellipse)`
	position: absolute;
	top: -50px;
	z-index: -1;
`;

const StyledPinkSpotLight = styled(PinkSpotLight)`
	position: absolute;
	top: -50px;
	left: 0;
`;

const StyledCyanSpotlight = styled(CyanSpotlight)`
	position: absolute;
	top: -50px;
	right: 0;
`;

const StyledGovernanceSubline = styled(Subline)`
	text-align: center;
	max-width: 900px;
`;

const StyledLinkOffIcon = styled(LinkOffIcon)`
	position: absolute;
	top: 20px;
	right: 20px;
`;

const StyledLinkButtons = styled(ExternalLink)<{ last?: boolean }>`
	position: relative;
	padding: 24px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	max-width: 400px;
	width: 100%;
	background-color: #0b0b22;
	height: 120px;
	border-radius: 5px;
`;

const StyledButtonLabel = styled.h4`
	font-family: GT America;
	font-style: normal;
	font-stretch: expanded;
	font-weight: bold;
	font-size: 14px;
	color: white;
`;

const StyledButtonText = styled.p`
	font-family: Inter;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 150%;
`;

const GraphContentWrapper = styled.div`
	width: 900px;
	position: relative;
	padding: 32px 24px;
`;

const Row = styled(FlexDiv)<{ rowNumber: number }>`
	margin-bottom: 24px;
	${({ rowNumber }) => {
		switch (rowNumber) {
			case 1:
				return 'justify-content: flex-end;';
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
	cursor: pointer;
	transition: all 200ms linear;
	${({ theme, focus }) =>
		focus ? `box-shadow: 0px 0px 30px ${theme.colors.pink}` : ''};
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
	cursor: pointer;
	transition: all 200ms linear;
	${({ theme, focus }) =>
		focus ? `box-shadow: 0px 0px 30px ${theme.colors.cyan}` : ''};
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
	cursor: pointer;
	border: 1px solid ${({ theme }) => theme.colors.green};
	background-color: ${({ theme }) => theme.colors.bgBlack};
	transition: all 200ms linear;
	${({ theme, focus }) =>
		focus ? `box-shadow: 0px 0px 20px ${theme.colors.green}` : ''};
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
	border-radius: 10px;
	padding: 2px 8px;
	font-size: 11px;
	margin-bottom: ${({ addMarginBottom }) => (addMarginBottom ? '8px' : '0px')};
	margin-top: ${({ addMarginTop }) => (addMarginTop ? '8px' : '0px')};
	cursor: pointer;
	transition: all 200ms linear;
	${({ theme, focus }) =>
		focus ? `box-shadow: 0px 0px 20px ${theme.colors.cyan}` : ''};
`;

const DAODescription = styled(FlexDivCol)<{ alignItems?: 'end' | 'start' }>`
	align-items: ${({ alignItems }) =>
		alignItems === 'end' ? 'flex-end' : 'flex-start'};
	min-width: 190px;
	font-size: 11px;
`;

const StyledText = styled.span<{ bold?: boolean; color?: 'pink' | 'white' }>`
	color: ${({ theme, color }) =>
		color === 'white' ? 'white' : theme.colors.pink};
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
		${({ color, theme }) =>
			color ? theme.colors[color] : theme.colors.lightViolet};
	z-index: 10;
	white-space: nowrap;
	cursor: pointer;
	font-size: 11px;
	transition: all 200ms linear;
	${({ theme, focus, color }) =>
		focus && color ? `box-shadow: 0px 0px 20px ${theme.colors[color]}` : ''};
`;
