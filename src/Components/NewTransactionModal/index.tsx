import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionOptions, TransactionOptionsButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, Wallet, X } from '@phosphor-icons/react';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <label htmlFor="">Titulo:
          <TransactionOptions>
          <TransactionOptionsButton variant="RendaFixa" value="Renda Fixa">
            <Wallet size={24}/>
              Renda Fixa
            </TransactionOptionsButton>
            <TransactionOptionsButton variant="RendaVariavel" value="Renda Variável">
              <Wallet size={24}/>
              Renda Variável
            </TransactionOptionsButton>
          </TransactionOptions>
          </label>
          
          <label htmlFor="">Tipo de Operação:
          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Compra
            </TransactionTypeButton>
            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Venda
            </TransactionTypeButton>
          </TransactionType>
          </label>
          


          
          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}