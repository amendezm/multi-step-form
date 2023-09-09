import { useSyncExternalStore } from "react"

export const useIsMobile = () => {
  const isMobile = useSyncExternalStore(subscribe, getSnapshot)

  return { isMobile }
}

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback)

  return () => {
    window.removeEventListener("resize", callback)
  }
}

const getSnapshot = () => window.innerWidth < 768
