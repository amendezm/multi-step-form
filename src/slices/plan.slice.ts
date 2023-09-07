import { StateCreator } from "zustand"

interface Plan {
  name: string
  price: number
  type: PlanType
}

type PlanType = "monthly" | "yearly"

export interface PlanSlice {
  plan: Plan
  savePlanType(_: PlanType): void
  savePlan(_: Pick<Plan, "name" | "price">): void
  resetPlan(): void
}

const initialPlanState: Plan = { name: "Arcade", price: 9, type: "monthly" }

export const createPlanSlice: StateCreator<PlanSlice> = set => ({
  plan: initialPlanState,
  savePlan: ({ name, price }) => set(plan => ({ ...plan, name, price })),
  savePlanType: type => set(plan => ({ ...plan, type })),
  resetPlan: () => set(() => ({ plan: initialPlanState }))
})
