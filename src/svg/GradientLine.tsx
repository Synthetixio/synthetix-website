export default function GradientLine({ ...rest }) {
	return (
		<svg
			width="410"
			height="2"
			viewBox="0 0 410 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
		>
			<line y1="1" x2="410" y2="1" stroke="url(#paint0_linear_2052_83299)" strokeWidth="2" />
			<defs>
				<linearGradient
					id="paint0_linear_2052_83299"
					x1="410"
					y1="2"
					x2="0"
					y2="2"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#A715BD" />
					<stop offset="1" stopColor="#00D1FF" />
				</linearGradient>
			</defs>
		</svg>
	);
}
