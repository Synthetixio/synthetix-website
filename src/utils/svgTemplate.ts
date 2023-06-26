/**
 * Template for React SVG
 *
 * Converts the given SVG into a TypeScript-compatible React component
 *
 * @see https://www.smooth-code.com/open-source/svgr/docs/typescript/
 * @see https://github.com/smooth-code/svgr
 */

function template({ template }: any, _opts: any, { componentName, jsx }: any) {
	const typeScriptTpl = template.smart({ plugins: ['typescript'] });

	return typeScriptTpl.ast`
import React from 'react';

const ${componentName} = (props: Props): JSX.Element => {
  return (
    ${jsx}
  );
};

type Props = {

} & React.SVGProps<SVGSVGElement>;

export default ${componentName};
`;
}

module.exports = template;
