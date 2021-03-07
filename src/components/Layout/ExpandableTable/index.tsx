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
  Button,
} from '@chakra-ui/react';
import { ReactComponent as DropIcon } from 'assets/svg/drop.svg';
import React, { useMemo, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useTable, useSortBy } from 'react-table';

interface TableProps {
  columns: any;
  data: any;
}

const ExpandableTable: React.FC<TableProps> = ({ columns, data }) => {
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

  const [expand, setExpand] = useState(null);

  const ExpandTable = (index: any) => {
    if (index === expand) {
      return setExpand(null);
    }
    return setExpand(index);
  };

  return (
    <ChakraTable {...getTableProps()} variant="unstyled">
      <Thead borderBottom="1px solid #2b2b2b">
        {headerGroups.map((headerGroup, idx) => (
          <Tr {...headerGroup.getHeaderGroupProps()} key={String(idx)}>
            {headerGroup.headers.map((column, index) => (
              <Th
                key={String(index)}
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
            <Th> </Th>
          </Tr>
        ))}
      </Thead>
      <Box h="8px" />

      <Tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return [
            <Tr
              key={String(index)}
              bg="white"
              p="0"
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
              <Td isNumeric>
                <Button
                  color="text.primary"
                  variant="link"
                  p="10px"
                  onClick={() => ExpandTable(index)}>
                  {expand === index ? <FiChevronUp /> : <FiChevronDown />}
                </Button>
              </Td>
            </Tr>,
            expand === index &&
              data[index]?.more?.map((item: any) => [
                <Tr
                  bg="background.primary"
                  fontSize="12px"
                  borderBottomWidth="1px"
                  borderColor="background.hover">
                  {Object.values(item).map((data1: any) => (
                    <Td>{data1}</Td>
                  ))}
                </Tr>,
              ]),
          ];
        })}
      </Tbody>
    </ChakraTable>
  );
};

export default ExpandableTable;
