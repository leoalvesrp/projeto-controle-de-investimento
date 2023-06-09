import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../libs/axios'

interface Transaction {
  id: number
  description: string
  price: number
  titulo: 'Renda Fixa' | 'Renda Variavel'
  operacao: 'Compra' | 'Venda'
  createdAt: string
}
interface NewTransactionInputs {
  description: string
  price: number
  titulo: 'Renda Fixa' | 'Renda Variavel'
  operacao: 'Compra' | 'Venda'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createdTransactions: (data: NewTransactionInputs) => Promise<void>
}
interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransections] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransections(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function createdTransactions(data: NewTransactionInputs) {
    const { description, price, titulo, operacao } = data
    const response = await api.post('transactions', {
      description,
      price,
      titulo,
      operacao,
      createdAt: new Date(),
    })
    setTransections((state) => [response.data, ...state])
  }

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createdTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
