import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import media from 'styled-media-query';
import Link from 'next/link';

import { Container } from './ContentBlock';
import { client } from '../../lib/sanity';

const Wrapper = styled.div`
	border-radius: 4px;
	justify-content: unset;
	color: #fff;
	height: fit-content;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	${media.lessThan('large')`
		display: flow-root;
		
	`}
	:hover {
		cursor: pointer;
		filter: brightness(120%);
	}
`;
const Left = styled.div`
	display: flex;
	flex-basis: 66.66%;
	padding-right: 10px;
`;

const Right = styled.div`
	background: #0b0b22;
	mix-blend-mode: normal;
	border: 1px solid #00d1ff;
	box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	backdrop-filter: blur(48px);
	padding: 20px;
	flex-basis: 33.33%;
	display: flex;
	flex-direction: row;

	span {
		float: left;
		vertical-align: middle;
		flex-grow: 0;
	}

	.content {
		float: left;
		width: auto;
		margin-left: 20px;
		color: #00d1ff;
		vertical-align: middle;
		line-height: 1.5;
		flex-grow: 0;

		a {
			display: block;
			font-weight: 700;
		}
	}
`;

interface IntroBlockProps {
	props: any;
}

export function IntroBlock({ props }: IntroBlockProps) {
	const imageProps: any = useNextSanityImage(client, props.icon);

	return (
		<Link href={props.iconLinkURL}>
			<Wrapper>
				<Left>
					<Container>
						<PortableText value={props.body} />
					</Container>
				</Left>
				<Right>
					<span>
						<Img
							{...imageProps}
							layout="fixed"
							objectFit="none"
							quality={100}
							width={40}
							height={40}
						/>
					</span>
					<div className="content">
						{props.iconText}
						<a href={props.iconLinkURL}>{props.iconLinkText}</a>
					</div>
				</Right>
			</Wrapper>
		</Link>
	);
}

export default IntroBlock;
