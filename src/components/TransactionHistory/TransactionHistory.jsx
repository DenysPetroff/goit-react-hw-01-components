import { TableHeader, TansactionTable } from "./TransactionHistory.styled"
import { TransactionList } from "./TransactionList"
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => { 
    return (
        <TansactionTable>
            <thead>
           <tr>
             <TableHeader>Type</TableHeader>
             <TableHeader>Amount</TableHeader>
             <TableHeader>Currency</TableHeader>
           </tr>
            </thead>
            
            
            <TransactionList items={ items } />
            
        </TansactionTable>

    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};