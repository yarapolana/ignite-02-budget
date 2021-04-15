import { FC, createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface Transaction {
  id: number
  title: string
  type: 'income' | 'expense'
  amount: number
  category: string
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export interface TransactionContextData {
  transactions: Transaction[]
  createTransaction(transaction: TransactionInput): Promise<void>
}

export const TransactionsContext = createContext<TransactionContextData>({} as TransactionContextData)

export const TransactionsProvider: FC = ({children}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(transaction: TransactionInput) {
    const res = await api.post<{transaction: Transaction}>('/transactions', transaction)
    
    setTransactions([...transactions, res.data.transaction])
  }

  useEffect(() => {
      api.get<{transactions: Transaction[]}>('transactions')
    .then(({ data }) => setTransactions(data.transactions))
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransaction,
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}
