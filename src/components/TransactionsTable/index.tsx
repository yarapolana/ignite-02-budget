import { TransactionsContainer } from './styles'

export function TransactionsTable() {
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
          <tr>
            <td>Web development</td>
            <td className="income">12.000 Mts</td>
            <td>Development</td>
            <td>20.02.2021</td>
          </tr>
          <tr>
            <td>Web development</td>
            <td className="expense">-12.000 Mts</td>
            <td>Development</td>
            <td>20.02.2021</td>
          </tr>
          <tr>
            <td>Web development</td>
            <td>12.000 Mts</td>
            <td>Development</td>
            <td>20.02.2021</td>
          </tr>
          <tr>
            <td>Web development</td>
            <td>12.000 Mts</td>
            <td>Development</td>
            <td>20.02.2021</td>
          </tr>
          <tr>
            <td>Web development</td>
            <td>12.000 Mts</td>
            <td>Development</td>
            <td>20.02.2021</td>
          </tr>
        </tbody>
      </table>
    </TransactionsContainer>
  )
}
