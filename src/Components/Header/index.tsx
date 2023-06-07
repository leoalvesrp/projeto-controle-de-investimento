import { PiggyBank } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  NewTransactionButton,
} from './styles'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <PiggyBank size={60} />
          <span>DT Investimentos</span>
        </Logo>
        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal open={open} onOpenChange={setOpen} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
