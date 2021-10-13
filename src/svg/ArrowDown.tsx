import React from 'react';

type Props = {} & React.SVGProps<SVGSVGElement>;

const ArrowDown = ({ ...props }: Props): JSX.Element => {
	return (
		<svg
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M16.6668 10L15.4918 8.82504L10.8335 13.475V3.33337H9.16683V13.475L4.51683 8.81671L3.3335 10L10.0002 16.6667L16.6668 10Z"
				fill="#00D1FF"
			/>
		</svg>
	);
};

export default ArrowDown;
