import { css } from "styled-components";

const keyframes = {
  show: `@keyframes show {
    to {
      opacity: 1;
      transform: none;
    }
  }`
}

const animations = {
  show: `
    animation: show 500ms ease-out forwards;
    ${keyframes.show}
  `
}

export const theme = {
  colors: {
    // Gray palette
    grayBlack70: '#030C17',
    grayBlack30: '#061B36',
    grayBlackBase: '#09274D',

    gray60: '#6B7D94',
    gray50: '#8493A6',
    gray30: '#B5BECA',

    gray10: '#E6E9ED',
    gray6: '#F0F2F4',
    gray2: '#FAFBFB',

    // Primary palette
    cyan: '#00D1FF',
    purple: '#402FC8',
    pink: 'ED1EFF',

    // Secondary palette
    green: '#31D8A4',
    orange: '#FC8738',
		yellow: '#FFD75C',

		bgBlack: '#06061B',
	},

	fonts: {
		body: css`
			font-family: Inter;
			font-size: 14px;
			line-height: 20px;
			color: rgba(255, 255, 255, 0.7);
		`,
		headline: css`
			font-family: GT America;
			font-weight: 900;
			font-size: 40px;
			line-height: 48px;
			font-stretch: expanded;
			text-transform: uppercase;
			color: #FFFFFF;
		`,

		subHeadline: css`
			font-family: GT America;
			font-weight: 700;
			font-stretch: condensed;
			font-size: 32px;
			line-height: 24px;
			text-transform: uppercase;
			color: #FFFFFF;
		`,

		smallHeadline: css`
			font-family: GT America;
			font-style: normal;
			font-stretch: expanded;
			font-weight: 900;
			font-size: 16px;
			line-height: 48px;

			text-align: center;
			text-transform: uppercase;

			color: #FFFFFF;
		`,

		menu: css`
			font-family: GT America;
			font-style: normal;
			font-weight: 700;
			font-stretch: condensed;
			font-size: 13px;
			line-height: 24px;
			color: #FFFFFF;
			text-transform: uppercase;
		`,

		button: css`
			font-family: GT America;
			font-style: normal;
			font-weight: bold;
			font-stretch: condensed;
			font-size: 13px;
			line-height: 24px;
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

			color: ${(props: any) => props.active ? '#00D1FF' : 'rgba(255, 255, 255, 0.5)'};

			&:hover {
				color: #00D1FF;
			}

			transition: color 0.2s ease-out;
			cursor: pointer;
		`
	},

	animations
}
