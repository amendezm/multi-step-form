import { useStore } from "@store"

export const useSteps = () => {
  const { step, goToStep, nextStep, prevStep, resetStep } = useStore(
    ({ step, goToStep, prevStep, nextStep, resetStep }) => ({
      step,
      goToStep,
      nextStep,
      prevStep,
      resetStep
    })
  )

  return { step, goToStep, nextStep, prevStep, resetStep }
}
