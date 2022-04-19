// @ts-nocheck
import media from 'styled-media-query';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import styled from 'styled-components';

import client from '../../lib/sanity';
import { theme } from '../../styles/theme';

const HeaderContainer = styled.div`
	position: relative;
	width: 100%;
	height: 250px;
	${theme.pageBuilder.rows};
	//overflow: hidden;

	${media.lessThan('medium')`
                //display: none;
        `}//margin-bottom: 25px;
`;

const HeadingText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 99;
	text-align: center;
	text-transform: uppercase;

	h1 {
		${theme.fonts.pageHeadline};
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

export default function GuidesHeader({ mainImage, title, subTitle, subPos }: any) {
	const imageProps = useNextSanityImage(client, mainImage);
	//console.log(subPos)
	return (
		<HeaderContainer>
			<HeadingText>
				{subTitle && !subPos && <span>{subTitle}</span>}
				<h1>{title}</h1>
				{subTitle && subPos && <span>{subTitle}</span>}
			</HeadingText>
			<Img {...imageProps} layout="fill" objectFit="none" quality={100} />
		</HeaderContainer>
	);
}
