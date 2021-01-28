import {
  Table as ChakraTable,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Icon,
  Box,
} from '@chakra-ui/react';
import { ReactComponent as DropIcon } from 'assets/svg/drop.svg';
import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';

interface TableProps {
  columns: any;
  data: Object[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns: useMemo(() => columns, [columns]),
      data: useMemo(() => data, [data]),
    },
    useSortBy,
  );

  return (
    <ChakraTable {...getTableProps()} variant="unstyled">
      <Thead borderBottom="1px solid #2b2b2b">
        {headerGroups.map(headerGroup => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <Th
                textTransform="capitalize"
                fontWeight="500"
                fontSize="14px"
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}>
                {column.render('title')}
                {!!column.render('title') && (
                  <chakra.span pl="3px">
                    <Icon viewBox="0 0 20 20" boxSize="20px">
                      <DropIcon />
                    </Icon>
                  </chakra.span>
                )}
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Box h="8px" />

      <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <Tr
              bg="white"
              {...row.getRowProps()}
              borderBottomWidth="8px"
              borderColor="background.primary">
              {row.cells.map(cell => (
                <Td
                  fontSize="14px"
                  {...cell.getCellProps()}
                  isNumeric={cell.column.isNumeric}>
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </ChakraTable>
  );
};

export default Table;
