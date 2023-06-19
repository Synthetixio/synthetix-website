import { Icon, IconProps } from '@chakra-ui/react';

export const VectorLines = ({
	width = '1920px',
	height = '1294px',
	...props
}: IconProps) => {
	return (
		<Icon width="1920" height="1294" viewBox="0 0 1920 1294" {...props}>
			<path
				d="M-260.633 527.178H2339M-260.633 937.381H2339M-46.1133 342.586L-41.8795 940.618M38.5649 342.586L42.7988 940.618M135.945 342.586L140.179 940.618M1082.93 408.435V1090.67M1422.77 115.895L1427.43 1179.18M1524.67 83.5103V1210.49M1622.05 0.390137V1293.61M-581 735.518H1773.06M1719.44 0.390137V1293.61"
				stroke="url(#paint0_radial_5705_60716)"
				strokeWidth="2"
			/>
			<defs>
				<radialGradient
					id="paint0_radial_5705_60716"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(1074 732.5) rotate(89.3526) scale(442.528 1476.11)"
				>
					<stop stopColor="#2D2D38" />
					<stop offset="1" stop-color="#2D2D38" stopOpacity="0" />
				</radialGradient>
			</defs>
		</Icon>
	);
};
