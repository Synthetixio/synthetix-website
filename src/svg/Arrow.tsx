import React from 'react';
import { theme } from 'src/styles/theme';

interface ArrowProps extends Props {
	disabled?: boolean;
	fill?: keyof typeof theme['colors'];
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
		<svg width={24} height={15} fill="none" {...props}>
			<path
				d="M0 6.296V3.704a.4.4 0 01.094-.262.303.303 0 01.228-.109h10.401L8.515.623a.393.393 0 01-.083-.19.421.421 0 01.021-.21.362.362 0 01.119-.162A.294.294 0 018.747 0h3.182c.044 0 .088.01.128.031.04.02.077.05.107.088l3.75 4.629A.402.402 0 0116 5c0 .093-.03.183-.086.252l-3.733 4.63a.326.326 0 01-.115.09.286.286 0 01-.137.028H8.731a.294.294 0 01-.176-.062.362.362 0 01-.118-.16.421.421 0 01-.021-.211.393.393 0 01.083-.19l2.224-2.71H.323a.303.303 0 01-.229-.11A.4.4 0 010 6.297z"
				fill={fillColor()}
			/>
		</svg>
	);
};

type Props = {} & React.SVGProps<SVGSVGElement>;
export default SvgArrow;
