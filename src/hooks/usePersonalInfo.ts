import { useStore } from "@store"

export const usePersonalInfo = () => {
  const { info, saveInfo, resetInfo } = useStore(({ info, saveInfo, resetInfo }) => ({
    info,
    saveInfo,
    resetInfo
  }))

  return { info, saveInfo, resetInfo }
}
