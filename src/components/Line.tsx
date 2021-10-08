import styled from 'styled-components';
import media from 'styled-media-query';

const Line = styled.div<{ static?: boolean }>`
	width: 100%;
	height: 1px;
	background: rgba(14, 4, 53, 0.29);
	background-image: linear-gradient(0deg, rgba(14, 4, 53, 0.29), rgba(14, 4, 53, 0.29)),
		linear-gradient(88.63deg, #00d1ff -14.83%, #ed1eff 108.22%);
	opacity: 0.39;
	position: ${(props) => (props.static ? 'static' : 'absolute')};
	bottom: 0;
	right: 0;
	left: 0;

	${media.lessThan('medium')`
		display:none;
	`}
`;
export default Line;
