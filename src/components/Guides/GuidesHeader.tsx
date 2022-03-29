// @ts-nocheck
import media from 'styled-media-query';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import styled from 'styled-components';

import client from '../../lib/sanity';

const HeaderContainer = styled.div`
	position: relative;
	width: 100%;
	height: 250px;
	//overflow: hidden;

	${media.lessThan('medium')`
                //display: none;
        `}
`;

const HeadingText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	text-align: center;
	text-transform: uppercase;

	h1 {
		font-family: 'GT America';
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 120%;
		color: #ffffff;
		text-shadow: 0px 4px 14px rgba(0, 0, 0, 0.55);
	}
	span {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-size: 12px;
		line-height: 15px;
		color: #ffffff;
		text-shadow: 0px 4px 14px rgba(0, 0, 0, 0.55);
	}
`;

export default function GuidesHeader({ mainImage, title, subTitle }: any) {
	const imageProps = useNextSanityImage(client, mainImage);

	return (
		<HeaderContainer>
			<HeadingText>
				{subTitle && <span>{subTitle}</span>}
				<h1>{title}</h1>
			</HeadingText>
			<Img {...imageProps} layout="fill" objectFit="none" quality={100} />
		</HeaderContainer>
	);
}
