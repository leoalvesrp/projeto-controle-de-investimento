import { useContext} from "react";
import { Header } from "../../Components/Header";
import { Sumary } from "../../Components/Sumary";
import { SearchForm } from "../Componentes/SearchForm";
import { TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";




export function Transactions(){

  const {transactions} = useContext(TransactionsContext)


  return(
    <div>
      <Header/>
      <Sumary/>
      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction)=>{
              return(
                <tr key={transaction.id}>
                  <td width="40%">{transaction.description}</td>
                  <td>
                    <span>
                      {transaction.price}
                    </span>
                  </td>
                  <td>{transaction.titulo}</td>
                  <td>{transaction.operacao}</td>
                  <td>
                    {transaction.createdAt}
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