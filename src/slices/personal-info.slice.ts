import { StateCreator } from "zustand"

interface PersonalInfo {
  name: string
  email: string
  phone: string
}

export interface PersonalInfoSlice {
  info: PersonalInfo
  saveInfo(_: PersonalInfo): void
  resetInfo(): void
}

const initialInfoState = { name: "", email: "", phone: "" }

export const createPersonalInfoSlice: StateCreator<PersonalInfoSlice> = set => ({
  info: initialInfoState,
  saveInfo: info => set(() => ({ info })),
  resetInfo: () => set(() => ({ info: initialInfoState }))
})
