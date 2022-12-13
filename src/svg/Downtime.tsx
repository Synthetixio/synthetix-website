import { Icon, IconProps } from '@chakra-ui/react';

const Downtime = ({ width = '55', height = '55', ...props }: IconProps) => {
	return (
		<Icon
			width={width}
			height={height}
			viewBox="0 0 55 55"
			fill="none"
			{...props}
		>
			<path
				d="M8.91455 8.96039L45.9708 46.0396"
				stroke="#00D1FF"
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M27.7063 46.0396C37.8695 46.0396 46.1084 37.8007 46.1084 27.6375C46.1084 17.4743 37.8695 9.23541 27.7063 9.23541C17.5431 9.23541 9.3042 17.4743 9.3042 27.6375C9.3042 37.8007 17.5431 46.0396 27.7063 46.0396Z"
				stroke="#00D1FF"
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
			<path
				d="M27.7061 14.5521V27.6375H40.0123"
				stroke="#00D1FF"
				stroke-width="2"
				stroke-miterlimit="10"
				stroke-linecap="round"
			/>
		</Icon>
	);
};

export default Downtime;
