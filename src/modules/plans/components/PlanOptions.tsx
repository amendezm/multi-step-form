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
  const [selectedPlanId, setSelectedPlanId] = useState(plan?.id)

  const handlePlanOptionClick = (planId: number) => {
    const { name, monthlyPrice, yearlyPrice } = planOptions.find(({ id }) => id === planId) ?? {}
    setValue("id", planId)
    setValue("name", name ?? "")
    setValue("price", isMonthlyPlanSelected ? monthlyPrice || 0 : yearlyPrice || 0)
  }

  useEffect(() => {
    const subscription = watch(({ type, id }) => {
      setSelectedPlanId(id)
      setIsMonthlyPlanSelected(type === "monthly")
    })

    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <ul className="grid grid-cols-3 gap-4">
      {planOptions.map(({ id, name, monthlyPrice, yearlyPrice, icon }) => (
        <li key={id} className="grow shrink-0">
          <PlanOptionItem
            name={name}
            icon={icon}
            price={isMonthlyPlanSelected ? monthlyPrice : yearlyPrice}
            isMonthlyPlan={isMonthlyPlanSelected}
            isSelected={id === selectedPlanId}
            onClick={() => handlePlanOptionClick(id)}
          />
        </li>
      ))}
    </ul>
  )
}
