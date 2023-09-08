import { StateCreator } from "zustand"

export interface AddOn {
  name: string
  price: number
}

export interface AddOnsSlice {
  addOns: AddOn[]
  saveAddOns(_: AddOn[]): void
  resetAddOns(): void
}

export const createAddOnsSlice: StateCreator<AddOnsSlice> = set => ({
  addOns: [],
  saveAddOns: addOns => set(() => ({ addOns })),
  resetAddOns: () => set(() => ({ addOns: [] }))
})
