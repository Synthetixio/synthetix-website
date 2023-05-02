import { IconProps, Icon } from '@chakra-ui/react';

interface LinkOffIconProps extends IconProps {
	white?: boolean;
}

export default function LinkOffIcon({ white, ...props }: LinkOffIconProps) {
	if (white) {
		return (
			<Icon
				width="16px"
				height="16px"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<g clipPath="url(#clip0_4279_6279)">
					<path
						d="M10.3765 5.10995L5.31929 5.10995L5.31929 3.77682L12.6525 3.77682L12.6525 11.11L11.3193 11.11L11.3193 6.05276L4.70526 12.9428L3.76245 12L10.3765 5.10995Z"
						fill="white"
					/>
				</g>
				<defs>
					<clipPath id="clip0_4279_6279">
						<rect width="16" height="16" fill="white" />
					</clipPath>
				</defs>
			</Icon>
		);
	}

	return (
		<Icon
			width="22"
			height="21"
			viewBox="0 0 22 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M7.97119 4.77747H17.0222V13.8284"
				stroke="#00D1FF"
				strokeWidth="3.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.0222 4.77745L5.33616 16.4635"
				stroke="#00D1FF"
				strokeWidth="3.2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Icon>
	);
}
