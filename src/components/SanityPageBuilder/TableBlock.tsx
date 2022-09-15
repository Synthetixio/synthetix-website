import { Table, Tbody, Td, Tr } from '@chakra-ui/react';

export interface TableBlockProps {
	table: {
		rows: { cells: string[] }[];
	};
}

const TableBlock = ({ table }: TableBlockProps) => {
	return (
		<Table>
			<Tbody>
				{table.rows.map((row, index) => (
					<Tr
						key={row.cells.toString().concat(index.toString())}
						background={
							!index
								? 'linear-gradient(73.6deg, #8e2de2 2.11%, #4b01e0 90.45%);'
								: ''
						}
					>
						{row.cells.map((cell, index) => (
							<Td
								borderWidth="1px"
								borderStyle="solid"
								borderColor="purple.500"
								key={cell.concat(index.toString())}
								p="5"
								fontWeight={!index ? 'bold' : ''}
							>
								{cell}
							</Td>
						))}
					</Tr>
				))}
			</Tbody>
		</Table>
	);
};

export default TableBlock;
