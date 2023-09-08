import { usePlan } from "@/hooks"

import { addOnOptions } from "../data"

import { AddOnOptionItem } from "./AddOnOptionItem"

export const AddOnsOptions = () => {
  const {
    plan: { type }
  } = usePlan()
  const isMonthlyPlan = type === "monthly"

  return (
    <ul className="flex flex-col gap-4">
      {addOnOptions.map(({ name, description, monthlyPrice, yearlyPrice }, index) => (
        <li key={index}>
          <AddOnOptionItem
            name={name}
            description={description}
            price={isMonthlyPlan ? monthlyPrice : yearlyPrice}
            isMonthlyPlan={isMonthlyPlan}
            isSelected={index === 1}
            onClick={() => {}}
          />
        </li>
      ))}
    </ul>
  )
}
