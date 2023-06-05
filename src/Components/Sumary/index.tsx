import { Wallet, Money } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Sumary(){
return(
  <SummaryContainer>
      <SummaryCard>
          <header>
            <span>Renda Fixa</span>
            <Wallet size={32} color="#00b37e" />
          </header>
          <strong>1200</strong>
      </SummaryCard>
      <SummaryCard>
          <header>
            <span>Renda Variável</span>
            <Wallet size={32} color="#00b37e" />
          </header>
          <strong>1200</strong>
      </SummaryCard>
      <SummaryCard variant="green">
          <header>
            <span>Total</span>
            <Money size={32} color="#00b37e" />
          </header>
          <strong>1200</strong>
      </SummaryCard>
  </SummaryContainer>
    
  

)
}