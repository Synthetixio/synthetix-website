import { Icon, IconProps } from '@chakra-ui/react';

export const ArrowDiagonal = ({
	width = '14px',
	height = '14px',
	...props
}: IconProps) => {
	return (
		<Icon
			width={width}
			height={height}
			viewBox="0 0 14 14"
			fill="none"
			{...props}
		>
			<g clipPath="url(#clip0_5805_4298)">
				<path
					d="M9.0793 4.47121L4.65423 4.47121L4.65423 3.30472L11.0708 3.30472L11.0708 9.72124L9.90426 9.72124L9.90426 5.29617L4.11695 11.325L3.29199 10.5L9.0793 4.47121Z"
					fill="#00D1FF"
				/>
			</g>
			<defs>
				<clipPath id="clip0_5805_4298">
					<rect width="14" height="14" fill="white" />
				</clipPath>
			</defs>
		</Icon>
	);
};
