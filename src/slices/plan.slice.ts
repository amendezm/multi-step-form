import { StateCreator } from "zustand"

export interface Plan {
  name: string
  price: number
  type: PlanType
}

type PlanType = "monthly" | "yearly"

export interface PlanSlice {
  plan: Plan
  savePlan(_: Plan): void
  resetPlan(): void
}

const initialPlanState: Plan = { name: "Arcade", price: 9, type: "monthly" }

export const createPlanSlice: StateCreator<PlanSlice> = set => ({
  plan: initialPlanState,
  savePlan: plan => set(() => ({ plan })),
  resetPlan: () => set(() => ({ plan: initialPlanState }))
})
