import { classNames } from "@/utils"
import { FC } from "react"

interface SwitchProps {
  checked: boolean
  onChange(_: boolean): void
}

export const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <div
      className="relative bg-marine-blue rounded-full w-10 h-5 px-1 cursor-pointer"
      onClick={() => onChange(!checked)}
    >
      <span
        className={classNames(
          "absolute h-3 w-3 rounded-full bg-alabaster top-1/2 -translate-y-1/2 left-1 transition-all",
          {
            "left-6": checked
          }
        )}
      ></span>
    </div>
  )
}
