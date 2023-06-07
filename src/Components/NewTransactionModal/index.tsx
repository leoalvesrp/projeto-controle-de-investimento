import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionOptions,
  TransactionOptionsButton,
  TransactionType,
  TransactionTypeButton,
} from './styles'
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Wallet,
  X,
} from '@phosphor-icons/react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import * as z from 'zod'
import React, { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  titulo: z.enum(['Renda Fixa', 'Renda Variavel']),
  operacao: z.enum(['Compra', 'Venda']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>
interface NewTransactionModalProps {
  open: boolean
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
}

export function NewTransactionModal(props: NewTransactionModalProps) {
  const { createdTransactions } = useContext(TransactionsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      titulo: 'Renda Fixa',
      operacao: 'Compra',
    },
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, titulo, operacao } = data

    createdTransactions({
      description,
      price,
      titulo,
      operacao,
    })

    reset()
    props.onOpenChange(false)

    console.log(data)
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
            required
          />

          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            placeholder="Preço"
            required
          />

          <Controller
            control={control}
            name="titulo"
            render={({ field }) => {
              return (
                <label htmlFor="titulo">
                  Titulo:
                  <TransactionOptions
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionOptionsButton
                      variant="RendaFixa"
                      value="Renda Fixa"
                    >
                      <Wallet size={24} />
                      Renda Fixa
                    </TransactionOptionsButton>
                    <TransactionOptionsButton
                      variant="RendaVariavel"
                      value="Renda Variavel"
                    >
                      <Wallet size={24} />
                      Renda Variável
                    </TransactionOptionsButton>
                  </TransactionOptions>
                </label>
              )
            }}
          />

          <Controller
            control={control}
            name="operacao"
            render={({ field }) => {
              return (
                <label htmlFor="operacao">
                  Tipo de Operação:
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeButton variant="compra" value="Compra">
                      <ArrowCircleUp size={24} />
                      Compra
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="venda" value="Venda">
                      <ArrowCircleDown size={24} />
                      Venda
                    </TransactionTypeButton>
                  </TransactionType>
                </label>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
