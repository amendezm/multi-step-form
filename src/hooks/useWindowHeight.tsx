import { useSyncExternalStore } from "react"

export const useWindowHeight = () => {
  const height = useSyncExternalStore(subscribe, getSnapshot)

  return { height }
}

const subscribe = (callback: () => void) => {
  window.addEventListener("resize", callback)

  return () => {
    window.removeEventListener("resize", callback)
  }
}

const getSnapshot = () => window.innerHeight
