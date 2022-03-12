import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from 'styled-components';

const CodeWrapper = styled.div`
        //max-width: 900px;
        }
`;

interface CodeBlockProps {
	language: string;
	code: any;
}

export function CodeBlock(props: CodeBlockProps) {
	return (
		<CodeWrapper>
			<SyntaxHighlighter
				// In this example, `props` is the value of a `code` field
				language={props.language || 'text'}
				wrapLongLines={true}
				wrapLines={true}
				style={synthwave84}
			>
				{props.code}
			</SyntaxHighlighter>
		</CodeWrapper>
	);
}

export default CodeBlock;
