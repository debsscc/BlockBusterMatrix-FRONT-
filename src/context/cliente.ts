import { clienteI } from '@/utils/types/clientes'
import { create } from 'zustand'

type ClienteStore = {
    cliente: clienteI
}

export const useClienteStore = create<ClienteStore>((set) => ({
    cliente: {} as clienteI
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
}))
