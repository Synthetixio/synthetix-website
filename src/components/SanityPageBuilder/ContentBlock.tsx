import React from 'react';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import styled from 'styled-components';
import slugify from 'slugify';
import MainImage from './MainImage';
import CodeBlock from './CodeBlock';
import { theme } from '../../styles/theme';

export const Container = styled.div`
	h1 {
		${theme.pageBuilder.h1};
	}
	h2 {
		${theme.pageBuilder.h2};
	}
	h3 {
		${theme.pageBuilder.h3};
	}
	h4 {
		${theme.pageBuilder.h4};
	}
	p {
		${theme.fonts.body};
		margin-bottom: 15px;
	}
	ul,
	ol {
		${theme.fonts.body};
		text-indent: 20px;
		margin-bottom: 15px;
	}
	ul {
		li {
			list-style: disc;
			list-style-position: inside;
			padding-left: 20px;
			text-indent: -20px;
		}
	}
	ol {
		li {
			list-style: decimal;
			list-style-position: inside;
		}
	}
	a {
		color: #00d1ff;
		:hover {
			text-decoration: underline;
		}
	}
	strong {
		font-weight: 900;
		color: #fff;
	}
	em {
		font-style: italic;
	}

	span.unknown__pt__mark__highlight {
		background-color: #8e2de2;
	}
	blockquote {
		background: #0b0b22;
		border-left: 3px solid #402fc8;
		margin: 1.5em 10px;
		padding: 1em 20px;
		color: #fff;
		font-style: italic;
		width: fit-content;
	}
`;

const portableTextComponents: Partial<PortableTextReactComponents> = {
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
