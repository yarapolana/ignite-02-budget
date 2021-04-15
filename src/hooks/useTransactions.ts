import { useContext } from 'react'

import { TransactionContextData, TransactionsContext } from '../contexts/transactions'

export function useTransactions(): TransactionContextData{
  const context = useContext(TransactionsContext)
  
  if (context === undefined) {
    throw new Error('useTransactionsContext must be used within an TransactionsProvider')
  }

  return context
}
