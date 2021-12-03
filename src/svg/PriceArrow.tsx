import React from 'react';
import { theme } from 'src/styles/theme';

interface PriceArrowProps extends Props {
	priceChange: number;
}

const PriceArrow = ({ priceChange, ...props }: PriceArrowProps): JSX.Element => {
	return (
		<svg
			width="14"
			height="16"
			viewBox="0 0 14 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ marginTop: 2, transform: priceChange >= 0 ? 'rotate(0)' : 'rotate(180deg)' }}
			{...props}
		>
			<path
				d="M13.7 6.7L12.3 8.1L8 3.8L8 16L6 16L6 3.8L1.7 8.1L0.299997 6.7L7 -5.85733e-07L13.7 6.7Z"
				fill={priceChange >= 0 ? theme.colors.green : theme.colors.red}
			/>
		</svg>
	);
};

type Props = {} & React.SVGProps<SVGSVGElement>;
export default PriceArrow;
