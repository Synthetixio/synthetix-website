// @ts-nocheck
import ReactPlayer from 'react-player';
//import styled from 'styled-components';

interface videoBlockProps {
	url: string;
}

export function VideoBlock({ props }: videoBlockProps) {
	const { url } = props;
	return <ReactPlayer url={url} width="100%" />;
}

export default VideoBlock;
