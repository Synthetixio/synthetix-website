import { Icon, IconProps } from '@chakra-ui/react';

export const EllipticalGradient = ({
	width = '1920px',
	height = '1903px',
	...props
}: IconProps) => {
	return (
		<Icon
			width={width}
			height={height}
			viewBox="0 0 1920 1903"
			fill="none"
			{...props}
		>
			<g filter="url(#filter0_f_3323_20872)">
				<path
					d="M2288.38 1602.95C2382.66 1480.73 2425.22 1338.17 2413.03 1185.46C2400.83 1032.74 2334.18 873.642 2217.83 719.515L733.371 931.028L2288.38 1602.95Z"
					fill="#00D1FF"
				/>
			</g>
			<g filter="url(#filter1_f_3323_20872)">
				<path
					d="M-311.847 300.564C-390.131 402.044 -425.473 520.411 -415.347 647.21C-405.221 774.01 -349.877 906.113 -253.269 1034.09L979.289 858.465L-311.847 300.564Z"
					fill="#EE2EFF"
				/>
			</g>
			<defs>
				<filter
					id="filter0_f_3323_20872"
					x="433.371"
					y="419.515"
					width="2281.7"
					height="1483.43"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="150"
						result="effect1_foregroundBlur_3323_20872"
					/>
				</filter>
				<filter
					id="filter1_f_3323_20872"
					x="-717.041"
					y="0.563477"
					width="1996.33"
					height="1333.52"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="150"
						result="effect1_foregroundBlur_3323_20872"
					/>
				</filter>
			</defs>
		</Icon>
	);
};
