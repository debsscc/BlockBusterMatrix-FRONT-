import { ClienteI } from '@/utils/types/clientes'
import { create } from 'zustand'

type ClienteStore = {
    cliente: ClienteI
    logaCliente: (cliente: ClienteI) => void
    deslogaCliente: () => void
}

export const useClienteStore = create<ClienteStore>((set) => ({
    cliente: {} as ClienteI,
    logaCliente: (clienteLogado) => set({ cliente: clienteLogado }),
    deslogaCliente: () => set({ cliente: {} as ClienteI }),
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
}))
