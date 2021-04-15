import { useTransactions } from '../../hooks/useTransactions'
import { formatCurrency } from '../../utils/formatCurrency'

import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'
import totalImg from '../../assets/total.svg'

import { SummaryContainer } from './styles'

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.expenses += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    income: 0,
    expenses: 0,
    total: 0,
  })

  return (
    <SummaryContainer>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          {formatCurrency(summary.income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={expenseImg} alt="Expenses" />
        </header>
        <strong>
          {formatCurrency(summary.expenses)}
        </strong>
      </div>
      <div>
        <header>
          <p>Status</p>
          <img src={totalImg} alt="overall" />
        </header>
        <strong>
          {formatCurrency(summary.total)}
        </strong>
      </div>
    </SummaryContainer>
  )
}
