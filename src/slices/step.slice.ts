import { StateCreator } from "zustand"

export interface StepsSlice {
  step: number
  goToStep(_: number): void
  prevStep(): void
  nextStep(): void
  resetStep(): void
}

export const createStepsSlice: StateCreator<StepsSlice> = set => ({
  step: 0,
  goToStep: step => set(() => ({ step })),
  prevStep: () => set(state => ({ step: state.step - 1 })),
  nextStep: () => set(state => ({ step: state.step + 1 })),
  resetStep: () => set(() => ({ step: 1 }))
})
