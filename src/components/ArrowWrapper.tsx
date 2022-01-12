import { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface ArrowWrapperProps {
	width: number;
	height: number;
}

export default function ArrowWrapper({
	width,
	height,
	children,
}: PropsWithChildren<ArrowWrapperProps>) {
	return (
		<StyledSVG
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			xmlns="http://www.w3.org/2000/svg"
			id="arrow-wrapper"
		>
			{children}
		</StyledSVG>
	);
}

const StyledSVG = styled.svg`
	position: absolute;
	z-index: 1;
	pointer-events: none;
`;
