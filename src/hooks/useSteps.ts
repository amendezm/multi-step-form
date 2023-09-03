import { useStore } from "@store"

export const useSteps = () => {
  const { step, nextStep, prevStep, resetStep } = useStore(({ step, prevStep, nextStep, resetStep }) => ({
    step,
    nextStep,
    prevStep,
    resetStep
  }))

  return { step, nextStep, prevStep, resetStep }
}
