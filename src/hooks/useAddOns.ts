import { useStore } from "@store"

export const useAddOns = () => {
  const { addOns, addAddOn, removeAddOn, resetAddOns } = useStore(({ addOns, addAddOn, removeAddOn, resetAddOns }) => ({
    addOns,
    addAddOn,
    removeAddOn,
    resetAddOns
  }))

  return { addOns, addAddOn, removeAddOn, resetAddOns }
}
