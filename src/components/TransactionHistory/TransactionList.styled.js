import styled from 'styled-components';

export const TableRaw = styled.tr`
width: 600px;
       background-color: #f9f9f9;
       &:nth-child(even) {
        background-color: #e4e8ec;
    }
`
 

export const TableData = styled.td`
       padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
`