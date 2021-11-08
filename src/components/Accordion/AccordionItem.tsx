import { ReactNodeArray } from 'react';
import { FlexDivCol, FlexDivRow } from '../../styles/common';
import styled from 'styled-components';
import media from 'styled-media-query';

export interface AccordionItemProps {
	open: boolean;
	title: string;
	descriptions: ReactNodeArray;
	buttons?: ReactNodeArray;
	onHeaderClick: () => void;
	isLast: boolean;
}

export default function AccordionItem({
	open,
	title,
	descriptions,
	buttons,
	onHeaderClick,
	isLast,
}: AccordionItemProps) {
	return (
		<AccordionItemOuter>
			<AccordionItemHeader onClick={onHeaderClick}>
				<Circle active={open} />
				<AccordionItemHeadline active={open}>{title}</AccordionItemHeadline>
			</AccordionItemHeader>
			{(!isLast || open) && (
				<AccordionItemInner isLast={isLast}>
					{open && (
						<AnimationContainer>
							<AccordionItemDescriptionContainer>{descriptions}</AccordionItemDescriptionContainer>
							{buttons}
						</AnimationContainer>
					)}
				</AccordionItemInner>
			)}
			{isLast && open && <LastCircle active={open} />}
		</AccordionItemOuter>
	);
}

interface ActiveItemProps {
	active?: boolean;
	isLast?: boolean;
}

const AccordionItemOuter = styled(FlexDivCol)`
	position: relative;
`;

const AccordionItemHeader = styled(FlexDivRow)`
	cursor: pointer;
	align-items: center;
	user-select: none;
`;

const AccordionItemInner = styled(FlexDivCol)<ActiveItemProps>`
	padding-left: 24px;
	border-left: 1px dotted rgb(35 35 35);
	min-height: 28px;
	padding-bottom: ${({ isLast }) => (isLast ? '0px' : '30px')};
`;

const AnimationContainer = styled.div<ActiveItemProps>`
	${({ theme }) => theme.animations.show};
	animation-delay: 100ms;
	opacity: 0;

	${media.lessThan('small')`
		display: flex;
		flex-direction: column;
	`};
`;

const Circle = styled.span<ActiveItemProps>`
	position: absolute;
	left: -4px;
	width: 10px;
	height: 10px;
	border: 2px solid ${({ active, theme }) => (active ? theme.colors.cyan : theme.colors.gray50)};
	border-radius: 50%;
`;

const LastCircle = styled(Circle)`
	bottom: 0px;
	background-color: ${({ theme }) => theme.colors.gray50};
	border: 2px solid ${({ theme }) => theme.colors.gray50};
`;

const AccordionItemHeadline = styled.h3<ActiveItemProps>`
	${({ theme }) => theme.fonts.smallHeadline};
	color: ${({ active, theme }) => (active ? theme.colors.cyan : theme.colors.gray50)};
	margin-left: 24px;
	line-height: 19px;
	text-align: start;
`;

const AccordionItemDescriptionContainer = styled.article`
	padding-top: 8px;
`;
