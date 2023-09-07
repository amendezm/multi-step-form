import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import {
  createStepsSlice,
  StepsSlice,
  createPersonalInfoSlice,
  PersonalInfoSlice,
  PlanSlice,
  createPlanSlice
} from "./slices"

type StoreType = StepsSlice & PersonalInfoSlice & PlanSlice

export const useStore = create<StoreType, [["zustand/devtools", never], ["zustand/persist", StoreType]]>(
  devtools(
    persist(
      (...a) => ({
        ...createStepsSlice(...a),
        ...createPersonalInfoSlice(...a),
        ...createPlanSlice(...a)
      }),
      { name: "@store" }
    )
  )
)
