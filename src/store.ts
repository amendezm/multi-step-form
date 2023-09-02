import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { createStepsSlice, StepsSlice } from "./slices"

export const useStore = create<StepsSlice, [["zustand/devtools", never], ["zustand/persist", StepsSlice]]>(
  devtools(
    persist(
      (...a) => ({
        ...createStepsSlice(...a)
      }),
      { name: "@store" }
    )
  )
)
