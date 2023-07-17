import {
  TransactionHistoryTable,
  TransactionBodyRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionBodyRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TransactionBodyRow>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};
