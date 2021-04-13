import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'
import totalImg from '../../assets/total.svg'
import { SummaryContainer } from './styles'

export function Summary() {
  return (
    <SummaryContainer>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>
          1.000,00 Mts
        </strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={expenseImg} alt="Expenses" />
        </header>
        <strong>
          -500,00 Mts
        </strong>
      </div>
      <div>
        <header>
          <p>Status</p>
          <img src={totalImg} alt="overall" />
        </header>
        <strong>
          500,00 Mts
        </strong>
      </div>
    </SummaryContainer>
  )
}
