import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { createStepsSlice, StepsSlice, createPersonalInfoSlice, PersonalInfoSlice } from "./slices"

type StoreType = StepsSlice & PersonalInfoSlice

export const useStore = create<StoreType, [["zustand/devtools", never], ["zustand/persist", StoreType]]>(
  devtools(
    persist(
      (...a) => ({
        ...createStepsSlice(...a),
        ...createPersonalInfoSlice(...a)
      }),
      { name: "@store" }
    )
  )
)
