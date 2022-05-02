// @ts-nocheck
import { css } from 'styled-components';
import media from 'styled-media-query';

const keyframes = {
	show: `@keyframes show {
    to {
      opacity: 1;
    }
  }`,
};

const animations = {
	show: `
    animation: show 500ms ease-out forwards;
    ${keyframes.show}
  `,
};

const rowMargins = css`
	margin: 10px 0;
`;

export const theme = {
	maxContentWidth: '1920px',
	maxContentWidthBuild: '1350px',
	pageBuilder: {
		rows: css`
			margin: 10px 0;
		`,
		h1: css`
			font-family: 'Inter';
			font-style: normal;
			font-weight: 700;
			font-size: 40px;
			line-height: 44px;
			color: #fff;
			${rowMargins}
		`,
		h2: css`
			font-family: 'Inter';
			font-style: normal;
			font-weight: 700;
			font-size: 32px;
			line-height: 35.2px;
			color: #fff;
			${rowMargins}
		`,
		h3: css`
			font-family: Inter;
			font-style: normal;
			font-weight: bold;
			font-size: 24px;
			line-height: 26.4px;
			color: #fff;
			${rowMargins}
		`,
		h4: css`
			font-family: Inter;
			font-style: normal;
			font-weight: bold;
			font-size: 18px;
			line-height: 19.8px;
			color: #fff;
			${rowMargins}
		`,
	},
	colors: {
		white: '#FFFFFF',

		// Gray palette
		grayBlack70: '#030C17',
		grayBlack30: '#061B36',
		grayBlackBase: '#09274D',

		gray60: '#6B7D94',
		gray55: '#8d8d9e',
		gray50: '#8493A6',
		gray30: '#B5BECA',
		gray20: '#bbbbc5',
		gray10: '#E6E9ED',
		gray6: '#F0F2F4',
		gray2: '#FAFBFB',

		// Primary palette
		cyan: '#00D1FF',
		purple: '#402FC8',
		pink: '#ED1EFF',
		lightViolet: '#8787C1',

		// Secondary palette
		green: '#31D8A4',
		orange: '#FC8738',
		yellow: '#FFD75C',
		red: '#FF7A68',

		bgBlack: '#06061B',
		bgBlackHighlighted: '#0e052f',
	},

	fonts: {
		body: css`
			font-family: Inter;
			font-size: 14px;
			line-height: 20px;
			color: rgba(255, 255, 255, 0.7);
			overflow-x: hidden;
		`,
		pageHeadline: css`
			font-family: GT America;
			font-weight: 900;
			font-size: 40px;
			line-height: 44px;
			font-stretch: expanded;
			text-transform: uppercase;
			color: #ffffff;
			margin-bottom: 16px;

			${media.lessThan('medium')`
			font-size: 32px;
			line-height: 38px;
			`}
		`,
		sectionTitle: css`
			font-family: GT America;
			font-weight: 900;
			font-size: 32px;
			line-height: 35px;
			font-stretch: expanded;
			text-transform: uppercase;
			color: #ffffff;
			margin-bottom: 16px;

			${media.lessThan('medium')`
			font-size: 24px;
			line-height: 26px;
			`}
		`,
		title: css`
			font-family: GT America;
			font-style: normal;
			font-weight: 900;
			font-size: 24px;
			font-stretch: expanded;
			line-height: 26px;
			text-transform: uppercase;
			color: #ffffff;

			${media.lessThan('medium')`
			font-size: 20px;
			line-height: 22px;
			`}
		`,
		smallTitle: css`
			font-family: GT America;
			font-style: normal;
			font-weight: bold;
			font-size: 16px;
			font-stretch: expanded;
			line-height: 26px;
			color: #ffffff;
		`,
		subline: css`
			font-family: Inter;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 20px;
			color: #ffffff;
			opacity: 0.7;
		`,
		menu: css`
			font-family: GT America;
			font-style: normal;
			font-weight: 700;
			font-stretch: condensed;
			font-size: 13px;
			line-height: 24px;
			color: #ffffff;
			text-transform: uppercase;
		`,
		button: css`
			font-family: GT America;
			font-style: normal;
			font-weight: bold;
			font-stretch: condensed;
			font-size: 12px;
			line-height: 12px;
			text-align: center;
			text-transform: uppercase;
		`,
		largeButton: css`
			font-family: GT America;
			font-style: normal;
			font-weight: bold;
			font-stretch: condensed;
			font-size: 14px;
			line-height: 14px;
			text-align: center;
			text-transform: uppercase;
		`,
		tab: css`
			font-family: GT America;
			font-style: normal;
			font-weight: 900;
			font-size: 14px;
			line-height: 48px;
			font-stretch: expanded;
			text-align: center;
			text-transform: uppercase;

			color: ${(props: any) => (props.active ? '#00D1FF' : 'rgba(255, 255, 255, 0.5)')};
			white-space: nowrap;

			&:hover {
				color: #00d1ff;
			}

			transition: color 0.2s ease-out;
			cursor: pointer;
		`,
	},

	animations,
};
