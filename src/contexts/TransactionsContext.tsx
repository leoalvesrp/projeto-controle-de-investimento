import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction{
  id:number,
  description:string,
  price:number,
  titulo: "renda fixa"|"renda variavel",
  operacao:"compra"|"venda"
  createdAt:string,

}
interface TransactionContextType {
  transactions: Transaction[];
}
interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType )

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransections]=useState<Transaction[]>([])

  async function loadTransection(){
    const response = await fetch('http://localhost:3333/transactions');
    const data = await response.json()
    setTransections(data)
  }
  useEffect(()=>{
    loadTransection()
  },[])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}