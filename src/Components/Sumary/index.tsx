import { Wallet, Money } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { priceFormatter } from '../../utils/formatter';

export function Sumary(){
const {transactions} = useContext(TransactionsContext)
const sumary = transactions.reduce((acc,transaction)=>{
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

return(
  <SummaryContainer>
      <SummaryCard>
          <header>
            <span>Renda Fixa</span>
            <Wallet size={32} color="#00b37e" />
          </header>
          <strong>{priceFormatter.format(sumary.rendafixa)}</strong>
      </SummaryCard>
      <SummaryCard>
          <header>
            <span>Renda Variável</span>
            <Wallet size={32} color="#00b37e" />
          </header>
          <strong>{priceFormatter.format(sumary.rendavariavel)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <Money size={32} color="#00b37e" />
          </header>
          <strong>{priceFormatter.format(sumary.total)}</strong>
      </SummaryCard>
  </SummaryContainer>
    
  

)
}