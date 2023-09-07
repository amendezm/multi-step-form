import { useStore } from "@store"

export const usePlan = () => {
  const { plan, resetPlan, savePlan } = useStore(({ plan, savePlan, resetPlan }) => ({
    plan,
    savePlan,
    resetPlan
  }))

  return { plan, resetPlan, savePlan }
}
