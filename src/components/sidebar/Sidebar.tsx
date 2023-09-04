import { useSteps } from "@/hooks"
import { classNames } from "@/utils"

import sidebarBg from "@/assets/bg-sidebar-desktop.svg"

const stepsTitles = ["Your Info", "Select Plan", "Add-Ons", "Summary"]

export const Sidebar = () => {
  const { step } = useSteps()

  return (
    <div className="w-full h-full relative">
      <img src={sidebarBg} className="absolute rounded-xl h-full w-full object-cover z-10" />
      <ul className="relative p-8 flex flex-col z-20 space-y-6">
        {stepsTitles.map((stepTitle, index) => (
          <li key={index} className="flex items-center gap-4">
            <div
              className={classNames("flex items-center justify-center w-8 h-8 rounded-full border border-light-gray", {
                "bg-light-blue border-light-blue": step === index + 1
              })}
            >
              <span
                className={classNames("text-white font-semibold text-sm", { "text-marine-blue": step === index + 1 })}
              >
                {index + 1}
              </span>
            </div>
            <div className="flex flex-col uppercase">
              <span className="text-xs text-cool-gray">Step {index + 1}</span>
              <p className="text-alabaster text-sm font-semibold tracking-wider">{stepTitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
