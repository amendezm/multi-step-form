import { useState } from "react"
import { useFormContext } from "react-hook-form"

import { Switch } from "@/components"
import { classNames } from "@/utils"
import { Plan } from "slices"

export const PlanTypeSelector = () => {
  const {
    formState: { defaultValues },
    setValue
  } = useFormContext<Plan>()
  const [checked, setChecked] = useState(defaultValues?.type === "yearly")

  const handleChange = (checked: boolean) => {
    setValue("type", checked ? "yearly" : "monthly")
    setChecked(checked)
  }

  return (
    <div className="w-full bg-alabaster rounded-xl p-3 flex gap-6 justify-center items-center mt-2">
      <span
        className={classNames("text-sm font-semibold tracking-tight text-cool-gray", { "text-marine-blue": !checked })}
      >
        Monthly
      </span>
      <Switch checked={checked} onChange={handleChange} />
      <span
        className={classNames("text-sm font-semibold tracking-tight text-cool-gray", { "text-marine-blue": checked })}
      >
        Yearly
      </span>
    </div>
  )
}
