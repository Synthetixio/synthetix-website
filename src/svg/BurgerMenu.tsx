import React from "react";

const SvgBurgerMenu = (props: Props): JSX.Element => {
	return (
		<svg width={22} height={16} fill="none" {...props}>
			<path fill="#fff" d="M0 0h22v2H0zM0 7h22v2H0zM0 14h22v2H0z" />
		</svg>
	);
};

type Props = {} & React.SVGProps<SVGSVGElement>;
export default SvgBurgerMenu;
