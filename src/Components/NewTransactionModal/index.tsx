import * as Dialog from '@radix-ui/react-dialog';
import { CloseButton, Content, Overlay, TransactionOptions, TransactionOptionsButton, TransactionType, TransactionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, Wallet, X } from '@phosphor-icons/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  // type: z.enum(['income', 'outcome']),
});

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
const {register, handleSubmit, formState:{isSubmitting}}= useForm<NewTransactionFormInputs>({
  resolver: zodResolver(newTransactionFormSchema),
}
  
)

async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log(data);
}

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
          {...register('description')} 
          type="text" 
          placeholder="Descrição" 
          required />
          <input 
          {...register('price', { valueAsNumber: true })} 
          type="number" 
          placeholder="Preço" 
          required />
          <label htmlFor="">Titulo:
          <TransactionOptions>
          <TransactionOptionsButton  variant="RendaFixa" value="Renda Fixa">
            <Wallet size={24}/>
              Renda Fixa
            </TransactionOptionsButton>
            <TransactionOptionsButton  variant="RendaVariavel" value="Renda Variável">
              <Wallet size={24}/>
              Renda Variável
            </TransactionOptionsButton>
          </TransactionOptions>
          </label>
          
          <label htmlFor="">Tipo de Operação:
          <TransactionType>
            <TransactionTypeButton variant="compra" value="compra">
              <ArrowCircleUp size={24} />
              Compra
            </TransactionTypeButton>
            <TransactionTypeButton variant="venda" value="venda">
              <ArrowCircleDown size={24} />
              Venda
            </TransactionTypeButton>
          </TransactionType>
          </label>
          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}