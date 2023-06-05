import {PiggyBank} from'@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, Logo, NewTransactionButton } from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
          <Logo>
            <PiggyBank size={50}/>
            <span>DT Investimentos</span>
          </Logo>
          <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}