import { Summary } from '../../components/Summary'
import { TransactionsTable } from '../../components/TransactionsTable'
import { DashboardContainer } from './styles'

export function Dashboard() {
  return (
    <DashboardContainer>
      <Summary />
      <TransactionsTable />
    </DashboardContainer>
  )
}