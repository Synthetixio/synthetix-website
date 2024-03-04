import React from 'react';

type Props = {} & React.SVGProps<SVGSVGElement>;

export default function PoweredByBlur(props: Props) {
	return (
		<svg
			width="1440"
			height="653"
			viewBox="0 0 1440 653"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g clipPath="url(#clip0_1590:70586)">
				<g opacity="0.5" filter="url(#filter0_f_1590:70586)">
					<path
						d="M1311.63 422.353C1339.05 374.856 1351.46 319.468 1347.95 260.144C1344.44 200.82 1325.11 139.024 1291.35 79.1697L860 161.603L1311.63 422.353Z"
						fill="#00D1FF"
					/>
				</g>
				<g opacity="0.5" filter="url(#filter1_f_1590:70586)">
					<path
						d="M55.8534 233.768C55.8534 288.539 72.8084 342.634 105.507 392.19C138.207 441.746 185.843 485.54 245.014 520.444L577.353 233.768L55.8534 233.768Z"
						fill="#ED1EFF"
					/>
				</g>
			</g>
			<defs>
				<filter
					id="filter0_f_1590:70586"
					x="560"
					y="-220.83"
					width="1088.53"
					height="943.183"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="150"
						result="effect1_foregroundBlur_1590:70586"
					/>
				</filter>
				<filter
					id="filter1_f_1590:70586"
					x="-244.146"
					y="-66.2322"
					width="1121.5"
					height="886.677"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="150"
						result="effect1_foregroundBlur_1590:70586"
					/>
				</filter>
				<clipPath id="clip0_1590:70586">
					<rect width="1440" height="653" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
