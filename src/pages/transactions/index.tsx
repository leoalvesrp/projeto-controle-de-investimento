import { useContext } from 'react'
import { Header } from '../../Components/Header'
import { Sumary } from '../../Components/Sumary'
import { SearchForm } from '../Componentes/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Sumary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.operacao}>
                      {transaction.operacao === 'venda' && '  -'}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.titulo}</td>
                  <td>{transaction.operacao}</td>
                  <td>
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
