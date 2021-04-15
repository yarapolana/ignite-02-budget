import { TransactionsContainer } from './styles'
import { useTransactions } from '../../hooks/useTransactions'
import { formatDate } from '../../utils/formatDate'
import { formatCurrency } from '../../utils/formatCurrency'

export function TransactionsTable() {
  const { transactions } = useTransactions()

  return (
    <TransactionsContainer>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions?.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === 'expense' && '-'}{' '}
                {formatCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formatDate(transaction.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionsContainer>
  )
}
