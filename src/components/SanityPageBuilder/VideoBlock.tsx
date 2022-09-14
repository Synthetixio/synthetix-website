import ReactPlayer from 'react-player';

interface videoBlockProps {
	url: string;
}

export function VideoBlock({ url }: videoBlockProps) {
	return (
		<ReactPlayer url={url} className="react-player" width="100%" controls />
	);
}

export default VideoBlock;
