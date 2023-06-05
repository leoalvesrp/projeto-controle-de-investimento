import { Header } from "../../../Components/Header";
import { Sumary } from "../../../Components/Sumary";
import { SearchForm } from "../Componentes/SearchForm";
import { TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
  return(
    <div>
      <Header/>
      <Sumary/>
      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
                <tr>
                  <td width="40%">Tesouro direto</td>
                  <td>
                    <span>
                      1200
                    </span>
                  </td>
                  <td>Renda Fixa</td>
                  <td>Compra</td>
                  <td>
                    05/06/2023
                  </td>
                </tr>
                <tr>
                  <td width="40%">bbsa3</td>
                  <td>
                    <span>
                      800
                    </span>
                  </td>
                  <td>Renda Variável</td>
                  <td>Compra</td>
                  <td>
                    05/06/2023
                  </td>
                </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}