import React from 'react';
import { theme } from 'src/styles/theme';

interface ArrowProps extends Props {
	disabled?: boolean;
	fill?: keyof (typeof theme)['colors'];
}

const SvgArrow = ({ disabled, fill, ...props }: ArrowProps): JSX.Element => {
	const fillColor = () => {
		if (disabled && !fill) {
			return 'grey';
		} else if (!disabled! && !fill) {
			return '#fff';
		}
		if (fill) {
			return theme.colors[fill];
		}
	};
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 3.99994L10.59 5.40994L16.17 10.9999L4 10.9999L4 12.9999L16.17 12.9999L10.59 18.5899L12 19.9999L20 11.9999L12 3.99994Z"
				fill={fillColor()}
			/>
		</svg>
	);
};

type Props = {} & React.SVGProps<SVGSVGElement>;
export default SvgArrow;
