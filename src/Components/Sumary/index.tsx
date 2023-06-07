import { Wallet, Money } from '@phosphor-icons/react'
import { SummaryCard, SummaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'
import { useSummary } from '../../hooks/useSummary'

export function Sumary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard variant="blue">
        <header>
          <span>Renda Fixa</span>
          <Wallet size={32} color="#000" />
        </header>
        <strong>{priceFormatter.format(summary.rendafixa)}</strong>
      </SummaryCard>
      <SummaryCard variant="orange">
        <header>
          <span>Renda Variável</span>
          <Wallet size={32} color="#000" />
        </header>
        <strong>{priceFormatter.format(summary.rendavariavel)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <Money size={32} color="#000" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
