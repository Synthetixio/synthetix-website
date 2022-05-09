// @ts-nocheck
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import media from 'styled-media-query';
import jp from 'jsonpath';
import { useEffect, useState } from 'react';

const StepsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: unset;
	color: #fff;

	.layerButton {
		width: 100%;

		button {
			cursor: pointer;
			padding: 8px 18px;
			margin: 0px 2px;
			color: #242731;
			font-family: 'Inter';
			font-style: normal;
			font-weight: 700;
			color: #00d1ff;
			background: none;
			border: none;
		}

		button.active {
			background: #00d1ff;
			border-radius: 100px;
			color: #242731;
		}
	}

	.pink.item {
		border: 2px solid transparent;
		border-radius: 4px;
		background: linear-gradient(to right, #000, #000),
			linear-gradient(73.6deg, #8e2de2 2.11%, #ed1eff 90.45%);
		background-clip: padding-box, border-box;
		background-origin: padding-box, border-box;

		padding: 15px;
		flex: 0 29.99%;
		margin: 12px;
		display: flex;
		${media.lessThan('huge')`
			flex: 0 46%;
			
			
		`}
		${media.lessThan('large')`
			flex: 0 100%;
			
			
		`}

		.number {
			min-width: 20px;
			span {
				height: 40px;
				width: 40px;
				line-height: 40px;
				background-color: #ed1eff;
				border-radius: 50%;
				display: inline-block;
				text-align: center;
				margin-right: 10px;
				font-weight: 700;
				font-size: 14px;
			}
		}
		.content {
			flex: 1;
		}
	}
	.black.item {
		border: none;
		background-color: #0b0b22;
		border-radius: 4px;
		padding: 15px;
		flex: 0 29.99%;
		margin: 12px;
		display: flow-root;
		${media.lessThan('huge')`
			flex: 0 46%;
			
			
		`}
		${media.lessThan('large')`
			flex: 0 100%;
			
			
		`}

		.number {
			width: 100%;
			margin-bottom: 10px;

			span {
				height: 40px;
				width: 40px;
				line-height: 40px;
				background-color: #402fc8;
				border-radius: 50%;
				display: inline-block;
				text-align: center;
				margin-right: 10px;
				font-weight: 700;
				font-size: 14px;
			}
		}
		.content {
		}
	}
`;

interface StepsBlockProps {
	props: any;
}

export function StepsBlock({ props }: StepsBlockProps) {
	const { style, steps } = props;

	let layers = jp.query(steps, '$..layers[*]');
	layers = [...new Set(layers)];

	const [openLayer, setOpenLayer] = useState(layers[0]);
	const [stepsData, setStepsData] = useState(null);

	useEffect(() => {
		let filtered = steps.filter(function (el) {
			if (el.layers) {
				return el.layers.includes(openLayer);
			} else return el;
		});

		setStepsData(filtered);
	}, [openLayer]);

	//console.log(stepsData);

	return (
		<StepsWrapper>
			<div className={`${style} layerButton`}>
				{layers &&
					layers.map((layer, index) => (
						<button
							key={index}
							value={layer}
							onClick={() => {
								setOpenLayer(layer);
							}}
							className={`${layer === openLayer ? 'active' : ''}`}
						>
							{layer}
						</button>
					))}
			</div>

			{stepsData &&
				stepsData.map((step, index) => (
					<div key={index} className={`${style} item`}>
						<div className="number">
							<span>{index + 1}</span>
						</div>
						<div className="content">
							<PortableText value={step.body} />
						</div>
					</div>
				))}
		</StepsWrapper>
	);
}

export default StepsBlock;
