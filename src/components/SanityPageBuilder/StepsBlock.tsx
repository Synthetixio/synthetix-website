// @ts-nocheck
import { PortableText } from '@portabletext/react';
import styled from 'styled-components';
import media from 'styled-media-query';

const StepsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: unset;
	color: #fff;

	.item {
		border: 2px solid #ed1eff;
		border-radius: 4px;
		padding: 15px;
		flex: 0 31%;
		margin: 10px 10px 10px 0px;
		display: flex;
		${media.lessThan('huge')`
			flex: 0 48%;
			
			
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
`;

interface StepsBlockProps {
	props: any;
}

export function StepsBlock({ props }: StepsBlockProps) {
	const { style, steps } = props;
	//console.log(steps);
	return (
		<StepsWrapper>
			{steps.map((step, index) => (
				<div key={index} className="item">
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
