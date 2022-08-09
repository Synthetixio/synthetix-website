import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { synthwave84 } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
	language: string;
	code: any;
}

export function CodeBlock({ language, code }: CodeBlockProps) {
	return (
		<SyntaxHighlighter
			language={language || 'text'}
			wrapLongLines={true}
			wrapLines={true}
			style={synthwave84}
		>
			{code}
		</SyntaxHighlighter>
	);
}

export default CodeBlock;
