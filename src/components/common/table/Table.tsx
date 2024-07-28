import React from 'react';
import styled from 'styled-components';

interface TableProps {
  columns: string[];
  data: any[][];
}

const TableContainer = styled.div`
  margin: 0px;
  padding: 0px;
  //border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.1);
`;

// const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const TableHeader = styled.th`
//   background-color: var(--paperColor);
//   padding: 10px;
//   font-weight: 600;
//   text-align: left;
//   font-size: small;
//   position: sticky;
//   position: -webkit-sticky;
//   top: 0;
//   z-index: 1;

//   > p {
//     opacity: 0.7;
//   }
// `;

// const TableCell = styled.td`
//   padding: 10px 30px 10px 10px;
//   //border: 1px solid #ddd;
// `;

const TableRow = styled.tr`

  &:nth-child(even) {
    //background-color: #f9f9f9;
  }
`;

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <TableContainer>
      {/* <StyledTable> */}
      <table className='min-w-full divide-y divide-[#8b8b8b20]'>
        <thead>
          <TableRow>
            {columns.map(column => (
              <th className=" py-3 text-left text-xs opacity-80 font-medium tracking-wider">
                {column}
              </th>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-4 whitespace-nowrap">{cell}</td>
                // <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </table>
      {/* </StyledTable> */}
    </TableContainer>
  );
};

export default Table;
