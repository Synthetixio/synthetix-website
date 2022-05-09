// @ts-nocheck
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: relative;
	padding-top: 56.25%;

	.react-player {
		position: absolute;
		top: 0;
		left: 0;
	}
`;

interface videoBlockProps {
	url: string;
}

export function VideoBlock({ props }: videoBlockProps) {
	const { url } = props;
	return (
		<Wrapper>
			<ReactPlayer url={url} className="react-player" width="100%" height="100%" />
		</Wrapper>
	);
}

export default VideoBlock;
