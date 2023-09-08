import { StateCreator } from "zustand"

export interface AddOn {
  name: string
  price: number
}

export interface AddOnsSlice {
  addOns: AddOn[]
  addAddOn(_: AddOn): void
  removeAddOn(_: AddOn): void
  resetAddOns(): void
}

export const createAddOnsSlice: StateCreator<AddOnsSlice> = set => ({
  addOns: [],
  addAddOn: addOn => set(({ addOns }) => ({ addOns: [...addOns, addOn] })),
  removeAddOn: addOn => set(({ addOns }) => ({ addOns: addOns.filter(({ name }) => name !== addOn.name) })),
  resetAddOns: () => set(() => ({ addOns: [] }))
})
