import { StateCreator } from "zustand"

export interface StepsSlice {
  step: number
  prevStep(): void
  nextStep(): void
  resetStep(): void
}

export const createStepsSlice: StateCreator<StepsSlice> = set => ({
  step: 1,
  prevStep: () => set(state => ({ step: state.step - 1 })),
  nextStep: () => set(state => ({ step: state.step + 1 })),
  resetStep: () => set(() => ({ step: 1 }))
})
