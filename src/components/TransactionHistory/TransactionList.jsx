import { TableData, TableRaw } from "./TransactionList.styled";
import PropTypes from 'prop-types';




    export const TransactionList = ({ items }) => {
  return (
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <TableRaw key={id}>
          <TableData>{type}</TableData>
          <TableData>{amount}</TableData>
          <TableData>{currency}</TableData>
        </TableRaw>
      ))}
    </tbody>
  );
};

TransactionList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};