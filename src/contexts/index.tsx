import { FC } from 'react'
import { TransactionsProvider } from './transactions'

export const RootProvider: FC = ({ children }) => {
  return (
    <TransactionsProvider>{children}</TransactionsProvider>
  )
}
