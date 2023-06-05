import {PiggyBank} from'@phosphor-icons/react'
import { HeaderContainer, HeaderContent, Logo, NewTransactionButton } from './styles'

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
          <Logo>
            <PiggyBank size={50}/>
            <span>DT Investimentos</span>
          </Logo>
          <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}