import { useStore } from "@store"

export const useAddOns = () => {
  const { addOns, saveAddOns, resetAddOns } = useStore(({ addOns, saveAddOns, resetAddOns }) => ({
    addOns,
    saveAddOns,
    resetAddOns
  }))

  return { addOns, saveAddOns, resetAddOns }
}
