import { ChangeEvent } from "react"
import { useController } from "react-hook-form"

import { usePlan } from "@/hooks"

import { addOnOptions } from "../data"

import { AddOnOptionItem } from "./AddOnOptionItem"
import { AddOn } from "slices"

export const AddOnsOptions = () => {
  const {
    plan: { type }
  } = usePlan()
  const isMonthlyPlan = type === "monthly"
  const {
    field: { value, onChange }
  } = useController({ name: "addOns" })

  const handleChange = (event: ChangeEvent<HTMLInputElement>, option: { name: string; price: number }) => {
    onChange(
      event.target.checked ? [...value, option] : value.filter(({ name }: { name: string }) => name !== option.name)
    )
  }

  return (
    <ul className="flex flex-col gap-4">
      {addOnOptions.map(({ name, description, monthlyPrice, yearlyPrice }, index) => (
        <li key={index}>
          <AddOnOptionItem
            name={name}
            description={description}
            price={isMonthlyPlan ? monthlyPrice : yearlyPrice}
            isMonthlyPlan={isMonthlyPlan}
            isSelected={(value as AddOn[]).some(({ name: addOnName }) => addOnName === name)}
            onChange={event => handleChange(event, { name, price: isMonthlyPlan ? monthlyPrice : yearlyPrice })}
          />
        </li>
      ))}
    </ul>
  )
}
