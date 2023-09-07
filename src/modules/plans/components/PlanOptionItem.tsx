import { classNames } from "@/utils"
import { FC } from "react"

interface PlanOptionItemProps {
  name: string
  priceLabel: string
  icon: string
  selected: boolean
}

export const PlanOptionItem: FC<PlanOptionItemProps> = ({ name, priceLabel, icon, selected }) => {
  return (
    <div
      className={classNames("p-4 rounded-md border border-light-gray cursor-pointer hover:bg-alabaster", {
        "border-marine-blue bg-magnolia": selected
      })}
    >
      <img src={icon} alt={name} className="mb-8" />
      <p className="text-marine-blue font-semibold mb-1 tracking-tight">{name}</p>
      <p className="text-cool-gray text-sm font-medium">{priceLabel}</p>
    </div>
  )
}
