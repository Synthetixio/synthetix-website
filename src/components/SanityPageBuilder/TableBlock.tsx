import styled from 'styled-components';

const Table = styled.table`
	border: 1px solid #ddd;
	padding: 8px;

	td,
	th {
		border: 1px solid #8e2de2;
		padding: 8px;
		color: #fff;
	}

	tr:first-child {
		font-weight: bold;
		background: linear-gradient(73.6deg, #8e2de2 2.11%, #4b01e0 90.45%);
	}

	//tr:nth-child(odd){background-color: #ccc;

	th {
		padding-top: 12px;
		padding-bottom: 12px;
		text-align: left;
		background-color: #04aa6d;
		color: white;
	}
`;

const TableBlock = ({ props }: any) => {
	const [...rows] = props.table.rows;
	return (
		<Table>
			<tbody>
				{rows.map((row: any, index: number) => (
					<tr key={index}>
						{row.cells.map((cell: any, i: number) => (
							<td key={i}>{cell}</td>
						))}
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default TableBlock;
