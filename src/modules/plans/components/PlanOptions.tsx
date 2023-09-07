import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"

import { Plan } from "slices"

import { planOptions } from "../data"

import { PlanOptionItem } from "./PlanOptionItem"

export const PlanOptions = () => {
  const {
    formState: { defaultValues: plan },
    watch,
    setValue
  } = useFormContext<Plan>()
  const [isMonthlyPlanSelected, setIsMonthlyPlanSelected] = useState(plan?.type === "yearly")
  const [selectedPlanName, setSelectedPlanName] = useState(plan?.name)

  const handlePlanOptionClick = (name: string) => {
    setValue("name", name)
  }

  useEffect(() => {
    const subscription = watch(({ type, name }) => {
      setSelectedPlanName(name)
      setIsMonthlyPlanSelected(type === "monthly")
    })

    return () => subscription.unsubscribe()
  }, [watch])

  useEffect(() => {
    const { monthlyPrice, yearlyPrice } = planOptions.find(({ name }) => name === selectedPlanName)!
    if (isMonthlyPlanSelected) {
      setValue("price", monthlyPrice)
      return
    }
    setValue("price", yearlyPrice)
  }, [isMonthlyPlanSelected, selectedPlanName, setValue])

  return (
    <ul className="grid grid-cols-3 gap-4">
      {planOptions.map(({ name, monthlyPrice, yearlyPrice, icon }, index) => (
        <li key={index} className="grow shrink-0">
          <PlanOptionItem
            name={name}
            icon={icon}
            price={isMonthlyPlanSelected ? monthlyPrice : yearlyPrice}
            isMonthlyPlan={isMonthlyPlanSelected}
            isSelected={name === selectedPlanName}
            onClick={() => handlePlanOptionClick(name)}
          />
        </li>
      ))}
    </ul>
  )
}