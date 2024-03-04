import React from 'react';

const SvgPlus = (props: Props): JSX.Element => {
	return (
		<svg
			width={14}
			height={14}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6 0v6H0v2h6v6h2V8h6V6H8V0H6z"
				fill="#0E052F"
			/>
		</svg>
	);
};

type Props = {} & React.SVGProps<SVGSVGElement>;
export default SvgPlus;
