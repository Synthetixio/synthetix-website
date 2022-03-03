import { Section } from 'src/styles/common';
import GradientLine from 'src/svg/GradientLine';
import styled from 'styled-components';

export default function Table() {
	return (
		<StyledTableSection customMaxWidth>
			<DAOToCommunityGradientWrapper>
				<StyledLabel color="cyan">
					DOAs & <br />
					Councils
				</StyledLabel>
				<StyledCircle color="cyan" />
				<GradientLine />
				<StyledCircle color="pink" />
				<StyledLabel color="pink">
					Community & <br /> Core Contributors
				</StyledLabel>
			</DAOToCommunityGradientWrapper>
			<DAOAndCommunityDutiesWrapper>
				{/* First Row */}
				<DutiesRow>
					<StyledDutyEntity color="cyan">
						Core Contributors <br /> Committee (CCC)
					</StyledDutyEntity>
					<StyledVerticalLineCyan />
					<StyledDutiesWrapper>
						<StyledDuty>Manage CC Pay Packages</StyledDuty>
						<StyledDuty>Manage CC Road Map & Vision</StyledDuty>
						<StyledDuty>Negotiate Partnerships</StyledDuty>
						<StyledDuty color="grey">Hire Core Contributors</StyledDuty>
						<StyledDuty color="cyan">Pay Core Contributors</StyledDuty>
					</StyledDutiesWrapper>
					<StyledDutiesWrapper>
						<StyledDuty isLast>Signal Priorities</StyledDuty>
						<StyledDuty color="grey" isLast>
							Implement SIPs / SCCPs
						</StyledDuty>
						<StyledDuty isLast>Protocol Work - General & Technical</StyledDuty>
						<StyledDuty color="grey" isLast>
							Vouch for potential CC
						</StyledDuty>
						<StyledDuty color="green" isLast>
							Elect CC Committee
						</StyledDuty>
					</StyledDutiesWrapper>
					<StyledVerticalLinePink />
					<StyledDutyEntity color="pink">
						Core Contributors <br /> (CCs)
					</StyledDutyEntity>
				</DutiesRow>
				{/* Second Row */}
				<DutiesRow>
					<StyledDutyEntity color="cyan">Treasury Council</StyledDutyEntity>
					<StyledVerticalLineCyan />
					<StyledDutiesWrapper>
						<StyledDuty>Manage Treasury</StyledDuty>
						<StyledDuty>Fund Incentives</StyledDuty>
						<StyledDuty>Strategy & Deal Making</StyledDuty>
						<StyledDuty color="cyan">Provide Budget & Funding to</StyledDuty>
						<StyledDuty color="cyan">pDAO, gDAO, aDAO, SC, CCC, RC</StyledDuty>
					</StyledDutiesWrapper>
					<StyledDutiesWrapper>
						<StyledDuty isLast color="grey">
							Work on Initiatives
						</StyledDuty>
						<StyledDuty color="grey" isLast>
							Work on Grants
						</StyledDuty>
					</StyledDutiesWrapper>
					<StyledVerticalLinePink />
					<StyledDutyEntity color="pink">Community Contributors</StyledDutyEntity>
				</DutiesRow>
				{/* Third Row */}
				<DutiesRow>
					<StyledDutyEntity color="cyan">Protocol DAO</StyledDutyEntity>
					<StyledVerticalLineCyan />
					<StyledDutiesWrapper>
						<StyledDuty color="grey">Execute SIPs</StyledDuty>
						<StyledDuty color="grey">Execute SCCPs</StyledDuty>
					</StyledDutiesWrapper>
					<StyledDutiesWrapper>
						<StyledDuty isLast color="grey">
							Author SIPs / SCCPs
						</StyledDuty>
						<StyledDuty isLast>Stake SNX</StyledDuty>
						<StyledDuty isLast color="grey">
							Propose Grants
						</StyledDuty>
						<StyledDuty isLast color="green">
							Elect gDAO, aDAO, SC, & TC, members
						</StyledDuty>
					</StyledDutiesWrapper>
					<StyledVerticalLinePink />
					<StyledDutyEntity color="pink">Community Contributors</StyledDutyEntity>
				</DutiesRow>
				{/* Fourth Row */}
				<DutiesRow>
					<StyledDutyEntity color="cyan">Spartan Council</StyledDutyEntity>
					<StyledVerticalLineCyan />
					<StyledDutiesWrapper>
						<StyledDuty color="grey">Vote on SIPs / SCCPs Feasibility &</StyledDuty>
						<StyledDuty color="grey">Risk Assessment on SIPs / SCCPs</StyledDuty>
						<StyledDuty color="green">Induct pDAO members</StyledDuty>
					</StyledDutiesWrapper>
				</DutiesRow>
				{/* Fifth Row */}
				<DutiesRow>
					<StyledDutyEntity color="cyan">Grants Council</StyledDutyEntity>
					<StyledVerticalLineCyan />
					<StyledDutiesWrapper>
						<StyledDuty>Sponsor Ecosystem Events</StyledDuty>
						<StyledDuty>Create Initiatives</StyledDuty>
						<StyledDuty color="grey">Review Grant Submissions</StyledDuty>
						<StyledDuty color="cyan">Pay Community Contributors</StyledDuty>
					</StyledDutiesWrapper>
				</DutiesRow>
				{/* Sixth Row */}
				<DutiesRow>
					<StyledDutyEntity color="cyan">Ambassador Council</StyledDutyEntity>
					<StyledVerticalLineCyan />
					<StyledDutiesWrapper>
						<StyledDuty>Participate & Manage Ecosystem Governance</StyledDuty>
						<StyledDuty>Advocate Ecosystem Partnerships</StyledDuty>
					</StyledDutiesWrapper>
				</DutiesRow>
				{/* Seventh Row */}
				<DutiesRow>
					<StyledDutyEntity color="cyan">Risk Committee</StyledDutyEntity>
					<StyledVerticalLineCyan />
					<StyledDutiesWrapper>
						<StyledDuty>Creating Risk Evaluation Processes</StyledDuty>
						<StyledDuty color="grey">Reviewing SIPs Risk</StyledDuty>
					</StyledDutiesWrapper>
				</DutiesRow>
			</DAOAndCommunityDutiesWrapper>
		</StyledTableSection>
	);
}

const StyledTableSection = styled(Section)`
	background-color: ${({ theme }) => theme.colors.bgBlackHighlighted};
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DAOToCommunityGradientWrapper = styled.div`
	width: 100%;
	max-width: 900px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledLabel = styled.h3<{ color?: 'cyan' | 'pink' }>`
	font-family: Inter;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 23px;
	color: ${({ color, theme }) => theme.colors[color ? color : 'cyan']};
	text-align: ${({ color }) => (color === 'cyan' ? 'end' : 'start')};
	margin: 0 18px;
	min-width: 190px;
`;

const StyledCircle = styled.div<{ color?: 'cyan' | 'pink' }>`
	border-radius: 50%;
	min-width: 21px;
	min-height: 21px;
	background-color: ${({ color, theme }) => theme.colors[color ? color : 'cyan']};
`;

const DAOAndCommunityDutiesWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 900px;
`;

const DutiesRow = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	margin-bottom: 48px;
`;

const StyledDutyEntity = styled.h4<{ color?: 'cyan' | 'pink' }>`
	color: ${({ color, theme }) => theme.colors[color ? color : 'cyan']};
	text-align: ${({ color }) => (color === 'cyan' ? 'end' : 'start')};
	font-family: Inter;
	font-style: normal;
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
`;

const StyledVerticalLineCyan = styled.span`
	height: 100px;
	width: 1px;
	background-image: linear-gradient(
		0deg,
		hsl(253deg 81% 10%) 0%,
		hsl(221deg 61% 22%) 10%,
		hsl(209deg 69% 31%) 20%,
		hsl(201deg 84% 38%) 30%,
		hsl(195deg 100% 43%) 40%,
		hsl(191deg 100% 50%) 50%,
		hsl(195deg 100% 43%) 60%,
		hsl(201deg 84% 38%) 70%,
		hsl(209deg 69% 31%) 80%,
		hsl(221deg 61% 22%) 90%,
		hsl(253deg 81% 10%) 100%
	);
`;

const StyledVerticalLinePink = styled.span`
	height: 100px;
	width: 1px;
	background-image: linear-gradient(
		0deg,
		hsl(253deg 81% 10%) 0%,
		hsl(255deg 58% 22%) 10%,
		hsl(266deg 58% 33%) 20%,
		hsl(277deg 61% 43%) 30%,
		hsl(286deg 70% 51%) 40%,
		hsl(295deg 100% 56%) 50%,
		hsl(286deg 70% 51%) 60%,
		hsl(277deg 61% 43%) 70%,
		hsl(266deg 58% 33%) 80%,
		hsl(255deg 58% 22%) 90%,
		hsl(253deg 81% 10%) 100%
	);
`;

const StyledDutiesWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledDuty = styled.span<{ color?: string; isLast?: boolean }>`
	color: ${({ color, theme }) => (color ? theme.colors[color] : 'white')};
	font-family: Inter;
	font-style: normal;
	font-weight: 300;
	font-size: 12px;
	line-height: 20px;
	text-align: ${({ isLast }) => isLast && 'end'};
`;
