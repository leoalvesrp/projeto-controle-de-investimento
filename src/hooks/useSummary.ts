import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (
        transaction.titulo === 'Renda fixa' &&
        transaction.operacao === 'Compra'
      ) {
        acc.rendafixa += transaction.price
        acc.total += transaction.price
      }
      if (
        transaction.titulo === 'Renda fixa' &&
        transaction.operacao === 'Venda'
      ) {
        acc.rendafixa -= transaction.price
        acc.total -= transaction.price
      }
      if (
        transaction.titulo === 'Renda variavel' &&
        transaction.operacao === 'Compra'
      ) {
        acc.rendavariavel += transaction.price
        acc.total += transaction.price
      }
      if (
        transaction.titulo === 'Renda variavel' &&
        transaction.operacao === 'Venda'
      ) {
        acc.rendavariavel -= transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      rendafixa: 0,
      rendavariavel: 0,
      total: 0,
    },
  )

  return summary
}
