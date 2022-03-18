// @ts-nocheck
import React from 'react';
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import slugify from 'slugify';

import MainImage from './MainImage';
import CodeBlock from './CodeBlock';

const Container = styled.div`
	h1 {
		font-family: Inter;
		font-style: normal;
		font-weight: bold;
		font-size: 40px;
		line-height: 150%;
		color: #fff;
	}
	h2 {
		font-family: Inter;
		font-style: normal;
		font-weight: bold;
		font-size: 36px;
		line-height: 150%;
		color: #fff;
	}
	h3 {
		font-family: Inter;
		font-style: normal;
		font-weight: bold;
		font-size: 30px;
		line-height: 150%;
		color: #fff;
	}
	h4 {
		font-family: Inter;
		font-style: normal;
		font-weight: bold;
		font-size: 28px;
		line-height: 150%;
		color: #fff;
	}
	p {
		font-family: Inter;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 150%;
		color: #fff;
		margin: 10px 0px;
	}
	ul,
	ol {
		color: #fff;
	}
	ul {
		li {
			list-style: disc;
			list-style-position: inside;
		}
	}
	ol {
		li {
			list-style: decimal;
			list-style-position: inside;
		}
	}
	a {
		color: #0092b2;
		:hover {
			text-decoration: underline;
		}
	}
	strong {
		font-weight: bold;
	}
	em {
		font-style: italic;
	}

	span.unknown__pt__mark__highlight {
		background-color: #8e2de2;
	}
	blockquote {
		background: #0b0b22;
		border-left: 10px solid #402fc8;
		margin: 1.5em 10px;
		padding: 1em 10px;
		color: #fff;
		font-style: italic;
	}
`;

type portableTextComponentsType = {
	types: object;
	marks: object;
	block: object;
};

const portableTextComponents: portableTextComponentsType = {
	types: {
		image: ({ value }: any) => <MainImage props={value} />,
		codeBlock: ({ value }: any) => <CodeBlock code={value.code} language={value.language} />,
	},

	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
			return (
				<a href={value.href} rel={rel}>
					{children}
				</a>
			);
		},
	},
	block: {
		h1: ({ value }: any) => (
			<h1 id={slugify(value.children[0].text, { lower: true })}>{value.children[0].text}</h1>
		),
		h2: ({ value }: any) => (
			<h2 id={slugify(value.children[0].text, { lower: true })}>{value.children[0].text}</h2>
		),
		h3: ({ value }: any) => (
			<h3 id={slugify(value.children[0].text, { lower: true })}>{value.children[0].text}</h3>
		),
		h4: ({ value }: any) => (
			<h4 id={slugify(value.children[0].text, { lower: true })}>{value.children[0].text}</h4>
		),
	},
};

function ContentBlock(props: any) {
	return (
		<Container>
			<PortableText value={props.block.body} components={portableTextComponents} />
		</Container>
	);
}

export default ContentBlock;
