import { useContext } from 'react';
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {

  const {transactions} = useContext(TransactionsContext)
const summary = transactions.reduce((acc,transaction)=>{
  if(transaction.titulo ==='renda fixa' && transaction.operacao ==='compra'){
    acc.rendafixa += transaction.price
    acc.total += transaction.price
  }if(transaction.titulo ==='renda fixa' && transaction.operacao ==='venda'){
    acc.rendafixa -= transaction.price
    acc.total -= transaction.price
  }if(transaction.titulo ==='renda variavel' && transaction.operacao ==='compra'){
    acc.rendavariavel += transaction.price
    acc.total += transaction.price}
  if(transaction.titulo ==='renda variavel' && transaction.operacao ==='venda'){
    acc.rendavariavel -= transaction.price
    acc.total -= transaction.price}

  return acc;
}
  ,{
    rendafixa:0,
    rendavariavel:0,
    total:0,
  }
,
)

  return summary;
}