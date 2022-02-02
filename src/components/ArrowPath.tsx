import { useEffect, useState } from 'react';
import { theme } from 'src/styles/theme';

type EdgeXPosition = number | 'endLeft' | 'endRight';
type EdgeYPosition = number | 'heightAsEndEl' | 'heightAsStartEl';

interface ArrowPathProps {
	edges?: {
		x: EdgeXPosition;
		y: EdgeYPosition;
	}[];
	startPosition: PositionDetails;
	endPosition: PositionDetails;
	onClick?: () => void;
	mainArrow?: boolean;
	color?: 'cyan' | 'pink' | 'green';
	hideCircle?: boolean;
	active?: boolean;
}

interface PositionDetails {
	id: string;
	position: 'bottom' | 'right' | 'left' | 'top';
}

const endLeftPadding = 20;
const endRightPadding = 882;

const absolutePathEl = ' L ';
const quadraticBezierCurveEl = ' Q ';

const getClientRects = (id: string) => {
	if (process.browser) return document.getElementById(id)?.getClientRects().item(0);
};

const sliceCoords = (coords: string) => {
	const pureCoords = coords.includes(absolutePathEl) ? coords.slice(3) : coords;
	const indexOfComma = pureCoords.indexOf(',');
	return [pureCoords.slice(0, indexOfComma), pureCoords.slice(indexOfComma + 1)];
};

const offsetToRightBottom = (xCoords: number, yCoords: number) => `${xCoords + 15},${yCoords + 15}`;
const offsetToLeft = (xCoords: number, yCoords: number) => `${xCoords - 15},${yCoords}`;

export default function ArrowPath({
	edges = [],
	startPosition,
	endPosition,
	onClick,
	color,
	mainArrow,
	hideCircle,
	active,
}: ArrowPathProps) {
	const [startOffset, setStartOffset] = useState({ top: 0, left: 0 });
	const [endOffset, setEndOffset] = useState({ top: 0, left: 0 });
	const [globalOffset, setGlobalOffset] = useState({ top: 0, left: 0 });
	const [pathLength, setPathLength] = useState(0);
	const [allEdges, setAllEdges] = useState(['']);
	const startElement = getClientRects(startPosition.id);
	const endElement = getClientRects(endPosition.id);
	const arrowWrapper = getClientRects('arrow-wrapper');

	const calculateXPosition = (edgeXPos: EdgeXPosition) => {
		switch (edgeXPos) {
			case 'endLeft':
				return endLeftPadding;
			case 'endRight':
				return endRightPadding;
			default:
				return endLeftPadding;
		}
	};

	const calculateYPosition = (edgeYPos: EdgeYPosition) => {
		switch (edgeYPos) {
			case 'heightAsEndEl':
				return endOffset.top - globalOffset.top;
			case 'heightAsStartEl':
				return startOffset.top - globalOffset.top;
			default:
				return endOffset.top - globalOffset.top;
		}
	};

	const arrowPointsDictionary: Record<PositionDetails['position'], string> = {
		left: `${endOffset.left - globalOffset.left + 2} ${endOffset.top - globalOffset.top},
				${endOffset.left - globalOffset.left - 10} ${endOffset.top - globalOffset.top - 6},
				${endOffset.left - globalOffset.left - 10} ${endOffset.top - globalOffset.top + 6}`,
		right: `${endOffset.left - globalOffset.left - 2} ${endOffset.top - globalOffset.top},
				${endOffset.left - globalOffset.left + 10} ${endOffset.top - globalOffset.top - 6},
				${endOffset.left - globalOffset.left + 10} ${endOffset.top - globalOffset.top + 6}`,
		bottom: `${endOffset.left - globalOffset.left} ${endOffset.top - globalOffset.top - 2},
				${endOffset.left - globalOffset.left - 6} ${endOffset.top - globalOffset.top + 10},
				${endOffset.left - globalOffset.left + 6} ${endOffset.top - globalOffset.top + 10}`,
		top: `${endOffset.left - globalOffset.left} ${endOffset.top - globalOffset.top + 2},
				${endOffset.left - globalOffset.left - 6} ${endOffset.top - globalOffset.top - 10},
				${endOffset.left - globalOffset.left + 6} ${endOffset.top - globalOffset.top - 10}`,
	};

	const calculateAllEdges = (edges: ArrowPathProps['edges']) => {
		if (startElement && endElement && edges?.length) {
			let previousCoords: string;
			return edges.map((edge, index) => {
				if (index === 0) {
					const xCoords =
						typeof edge.x === 'number'
							? (edge.x - globalOffset.left + startOffset.left).toFixed(0)
							: calculateXPosition(edge.x).toFixed(0);

					const yCoords =
						typeof edge.y === 'number'
							? (edge.y - globalOffset.top + startOffset.top).toFixed(0)
							: calculateYPosition(edge.y).toFixed(0);

					previousCoords = absolutePathEl.concat(xCoords.concat(',').concat(yCoords));
					return previousCoords;
				}
				previousCoords = absolutePathEl
					.concat(
						(typeof edge.x === 'number'
							? Number(sliceCoords(previousCoords)[0]) + edge.x
							: calculateXPosition(edge.x)
						).toFixed(0)
					)
					.concat(',')
					.concat(
						(typeof edge.y === 'number'
							? Number(sliceCoords(previousCoords)[1]) + edge.y
							: calculateYPosition(edge.y)
						).toFixed(0)
					);
				return previousCoords;
			});
		}
		return [];
	};

	const calculateAllCurves = (edges: string[]) => {
		let prevCurveCoords: string;
		return edges.map((edge, index) => {
			const [xCoords, yCoords] = sliceCoords(edge).map((coords) => Number(coords));
			let nextCoords: number[];
			const hasMoreThanOneEdge = !!edges[index + 1];
			if (hasMoreThanOneEdge) {
				nextCoords = sliceCoords(edges[index + 1]).map((coords) => Number(coords));
			} else {
				nextCoords = [endOffset.left, endOffset.top];
			}
			if (index === 0) {
				if (startPosition.position === 'left') {
					if (yCoords > nextCoords[1]) {
						prevCurveCoords = `${xCoords - 15},${yCoords - 15}`;
						return edge
							.concat(quadraticBezierCurveEl)
							.concat(`${xCoords - 15},${yCoords + 5} ${xCoords - 15},${yCoords - 15}`);
					}
					if (!hasMoreThanOneEdge && yCoords < nextCoords[1]) {
						return edge
							.concat(quadraticBezierCurveEl)
							.concat(`${xCoords - 15},${yCoords + 5} ${xCoords - 15},${yCoords - 15}`);
					}
					prevCurveCoords = `${xCoords - 15},${yCoords + 15}`;
					return edge
						.concat(quadraticBezierCurveEl)
						.concat(`${xCoords - 15},${yCoords + 5} ${xCoords - 15},${yCoords + 15}`);
				}
				if (startPosition.position === 'right') {
					if (yCoords > nextCoords[1]) {
						prevCurveCoords = `${xCoords + 15},${yCoords - 15}`;
						return edge
							.concat(quadraticBezierCurveEl)
							.concat(` ${xCoords + 15},${yCoords} ${xCoords + 15},${yCoords - 15}`);
					}
					prevCurveCoords = `${offsetToRightBottom(xCoords, yCoords)}`;
					return edge
						.concat(quadraticBezierCurveEl)
						.concat(`${xCoords + 15},${yCoords + 5} ${offsetToRightBottom(xCoords, yCoords)}`);
				}
				if (startPosition.position === 'bottom') {
					if (!hasMoreThanOneEdge && endPosition.position === 'left') {
						prevCurveCoords = `${offsetToRightBottom(xCoords, yCoords)}`;
						return absolutePathEl
							.concat(xCoords.toFixed(0))
							.concat(',')
							.concat((yCoords - 15).toFixed(0))
							.concat(quadraticBezierCurveEl)
							.concat(`${xCoords},${yCoords} ${xCoords + 15},${yCoords}`);
					}
					if (!hasMoreThanOneEdge && endPosition.position === 'right') {
						prevCurveCoords = `${offsetToLeft(xCoords, yCoords)}`;
						return absolutePathEl
							.concat(xCoords.toFixed(0))
							.concat(',')
							.concat((yCoords - 35).toFixed(0))
							.concat(quadraticBezierCurveEl)
							.concat(`${xCoords},${yCoords - 5} ${offsetToLeft(xCoords - 15, yCoords)}`);
					}
					prevCurveCoords = `${offsetToRightBottom(xCoords, yCoords)}`;
					return edge
						.concat(quadraticBezierCurveEl)
						.concat(`${xCoords},${yCoords + 15} ${offsetToRightBottom(xCoords, yCoords)}`);
				}
				if (startPosition.position === 'top') {
					if (!hasMoreThanOneEdge && endPosition.position === 'right') {
						prevCurveCoords = `${offsetToRightBottom(xCoords, yCoords)}`;
						return absolutePathEl
							.concat(xCoords.toFixed(0))
							.concat(',')
							.concat((yCoords + 15).toFixed(0))
							.concat(quadraticBezierCurveEl)
							.concat(`${xCoords},${yCoords} ${offsetToLeft(xCoords, yCoords)}`);
					}
					if (!hasMoreThanOneEdge && endPosition.position === 'left') {
						prevCurveCoords = `${offsetToRightBottom(xCoords, yCoords)}`;
						return absolutePathEl
							.concat(xCoords.toFixed(0))
							.concat(',')
							.concat((yCoords + 15).toFixed(0))
							.concat(quadraticBezierCurveEl)
							.concat(`${xCoords},${yCoords} ${xCoords + 15},${yCoords}`);
					}
					prevCurveCoords = `${offsetToRightBottom(xCoords, yCoords)}`;
					return edge
						.concat(quadraticBezierCurveEl)
						.concat(`${xCoords},${yCoords + 15} ${offsetToRightBottom(xCoords, yCoords)}`);
				}
				return edge;
			}
			const [prevXCoords, prevYCoords] = sliceCoords(prevCurveCoords).map((coords) =>
				Number(coords)
			);
			if (index === edges.length - 1) {
				if (endPosition.position === 'left') {
					// coming from top
					if (prevXCoords < xCoords && prevYCoords < yCoords) {
						const startPointOfCurve = absolutePathEl
							.concat((xCoords - 15).toFixed(0))
							.concat(',')
							.concat((yCoords - 15).toFixed(0));
						const curve = quadraticBezierCurveEl.concat(
							`${xCoords - 15},${yCoords} ${xCoords + 5},${yCoords}`
						);
						return startPointOfCurve.concat(curve);
					}
					// coming from bottom
					if (prevXCoords < xCoords && prevYCoords > yCoords) {
						const startPointOfCurve = absolutePathEl
							.concat((xCoords - 5).toFixed(0))
							.concat(',')
							.concat((yCoords + 15).toFixed(0));
						const curve = quadraticBezierCurveEl.concat(
							`${xCoords - 5},${yCoords} ${xCoords + 15},${yCoords}`
						);
						return startPointOfCurve.concat(curve);
					}
					if (prevXCoords > xCoords && prevYCoords < yCoords) {
						const startPointOfCurve = absolutePathEl
							.concat((xCoords + 15).toFixed(0))
							.concat(',')
							.concat((yCoords - 15).toFixed(0));
						const curve = quadraticBezierCurveEl.concat(
							`${xCoords + 15},${yCoords} ${xCoords + 30},${yCoords}`
						);
						return startPointOfCurve.concat(curve);
					}
					if (prevYCoords > yCoords) {
						const startPointOfCurve = absolutePathEl
							.concat(prevXCoords.toFixed(0))
							.concat(',')
							.concat((yCoords + 15).toFixed(0));
						const curve = quadraticBezierCurveEl.concat(
							`${xCoords + 5},${yCoords} ${xCoords + 15},${yCoords}`
						);
						return startPointOfCurve.concat(curve);
					}
					return edge;
				}

				if (endPosition.position === 'top' && prevXCoords < xCoords) {
					const startPointOfCurve = absolutePathEl
						.concat((xCoords - 15).toFixed(0))
						.concat(',')
						.concat(prevYCoords.toFixed(0));
					const curve = quadraticBezierCurveEl.concat(
						`${xCoords},${yCoords + 15} ${xCoords},${yCoords + 30}`
					);
					return startPointOfCurve.concat(curve);
				}
				// coming from top
				if (endPosition.position === 'right' && prevYCoords < yCoords) {
					const startPointOfCurve = absolutePathEl
						.concat((xCoords + 15).toFixed(0))
						.concat(',')
						.concat((yCoords - 15).toFixed(0));
					const curve = quadraticBezierCurveEl.concat(
						`${xCoords + 15},${yCoords} ${offsetToLeft(xCoords, yCoords)}`
					);
					return startPointOfCurve.concat(curve);
				}
				return edge;
			}

			// coming from left
			if (prevYCoords > yCoords && prevXCoords < xCoords) {
				prevCurveCoords = `${xCoords + 5},${yCoords}`;
				return absolutePathEl
					.concat((xCoords - 15).toFixed(0))
					.concat(',')
					.concat((yCoords + 15).toFixed(0))
					.concat(quadraticBezierCurveEl)
					.concat(`${xCoords + 5},${yCoords + 15} ${xCoords + 5},${yCoords}`);
			}
			// coming from bottom
			if (prevYCoords > yCoords && prevXCoords > xCoords) {
				prevCurveCoords = `${xCoords},${yCoords}`;
				return absolutePathEl
					.concat((xCoords + 15).toFixed(0))
					.concat(',')
					.concat((yCoords + 15).toFixed(0))
					.concat(quadraticBezierCurveEl)
					.concat(`${xCoords + 15},${yCoords} ${xCoords},${yCoords}`);
			}
			// coming from right
			if (prevYCoords === yCoords && xCoords < prevXCoords) {
				// going down
				if (nextCoords[1] > yCoords) {
					prevCurveCoords = `${xCoords - 15},${yCoords + 15}`;
					return absolutePathEl
						.concat((xCoords + 15).toFixed(0))
						.concat(',')
						.concat(yCoords.toFixed(0))
						.concat(quadraticBezierCurveEl)
						.concat(`${offsetToLeft(xCoords, yCoords)} ${xCoords - 15},${yCoords + 15}`);
				}
				prevCurveCoords = `${xCoords - 5},${yCoords - 15}`;
				return absolutePathEl
					.concat((xCoords + 15).toFixed(0))
					.concat(',')
					.concat(yCoords.toFixed(0))
					.concat(quadraticBezierCurveEl)
					.concat(`${xCoords},${yCoords} ${xCoords - 5},${yCoords - 15}`);
			}
			// coming from top
			if (prevYCoords < yCoords && prevXCoords - 15 === xCoords) {
				prevCurveCoords = `${offsetToLeft(xCoords, yCoords)}`;
				return absolutePathEl
					.concat((xCoords + 15).toFixed(0))
					.concat(',')
					.concat((yCoords - 15).toFixed(0))
					.concat(quadraticBezierCurveEl)
					.concat(`${xCoords + 5},${yCoords} ${offsetToLeft(xCoords, yCoords)}`);
			}
			return edge;
		});
	};

	useEffect(() => {
		if (arrowWrapper) {
			setGlobalOffset({ top: Math.round(arrowWrapper.top), left: Math.round(arrowWrapper.left) });
		}
		if (startElement) {
			if (startPosition.position === 'left' || startPosition.position === 'right') {
				setStartOffset({
					top: Math.round(startElement.top + startElement.height / 2),
					left: Math.round(startElement[startPosition.position]),
				});
			} else {
				setStartOffset({
					top: Math.round(startElement[startPosition.position]),
					left: Math.round(startElement.left + startElement.width / 2),
				});
			}
		}
		if (endElement) {
			if (endPosition.position === 'left' || endPosition.position === 'right') {
				setEndOffset({
					top: Math.round(endElement.top + endElement.height / 2),
					left: Math.round(endElement[endPosition.position]),
				});
			} else {
				setEndOffset({
					top: Math.round(endElement[endPosition.position]),
					left: Math.round(endElement.left + endElement.width / 2),
				});
			}
		}
		const combinedEdgesWithArches = calculateAllCurves(calculateAllEdges(edges));
		setAllEdges(combinedEdgesWithArches);
		if (startElement && endElement) {
			const length = (
				document.getElementById(startPosition.id.concat(endPosition.id)) as any
			).getTotalLength();
			setPathLength(pathLength === 0 ? length : pathLength);
		}
	}, [
		globalOffset.top,
		endOffset.top,
		startOffset.top,
		arrowWrapper?.top,
		active,
		startPosition.id,
		endPosition.id,
	]);

	return (
		<g onClick={onClick} style={{ margin: '15px' }}>
			<style>
				{`
				.draw {
					stroke-dasharray: 4;
					animation: dashdraw 1s linear infinite reverse;

				}
				@keyframes dashdraw {to {stroke-dashoffset: 40;}}

				.drawMainArrow {
					stroke-dasharray: ${pathLength};
					stroke-dashoffset: ${pathLength};
					animation: dash 3s linear infinite;
				}
				@keyframes dash {
					to {stroke-dashoffset: 0}
				 }

				 .stopAnimation {
					animation-name:none!important;
					stroke-dashoffset: 0
				 }
			`}
			</style>

			{mainArrow ||
				(!hideCircle && (
					<circle
						cx={startOffset.left - globalOffset.left}
						cy={startOffset.top - globalOffset.top}
						r="5"
						fill={color ? theme.colors[color] : theme.colors.lightViolet}
					/>
				))}
			<path
				id={startPosition.id.concat(endPosition.id)}
				className={active ? (mainArrow ? 'drawMainArrow' : 'draw') : 'stopAnimation'}
				d={`M ${startOffset.left - globalOffset.left},${
					startOffset.top - globalOffset.top
				} ${allEdges.toString().replace(/,/gm, ' ')} L ${endOffset.left - globalOffset.left},${
					endOffset.top - globalOffset.top
				}`}
				strokeWidth={mainArrow ? '3' : '2'}
				stroke={color ? theme.colors[color] : theme.colors.lightViolet}
				strokeDasharray={mainArrow ? '0' : '4'}
				fill="none"
			/>
			<polygon
				points={arrowPointsDictionary[endPosition.position]}
				fill={color ? theme.colors[color] : theme.colors.lightViolet}
			/>
		</g>
	);
}
