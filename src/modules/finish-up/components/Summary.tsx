import { Fragment, useMemo } from "react"

import { useAddOns, usePlan, useSteps } from "@/hooks"
import { capitalize } from "@/utils"

const PLANS_STEP = 1

export const Summary = () => {
  const { goToStep } = useSteps()
  const {
    plan: { type: planType, name: planName, price: planPrice }
  } = usePlan()
  const { addOns } = useAddOns()
  const totalPrice = useMemo(
    () => addOns.reduce((acc, current) => acc + current.price, 0) + planPrice,
    [addOns, planPrice]
  )
  const priceSuffix = planType === "monthly" ? "mo" : "yr"
  const totalSuffix = planType === "monthly" ? "month" : "year"

  return (
    <Fragment>
      <div className="bg-alabaster rounded-lg py-4 px-6">
        <div className="flex items-center justify-between border-b border-magnolia-gray pb-6 mb-4">
          <div className="flex flex-col items-start">
            <span className="text-marine-blue tracking-tight font-medium">
              {planName} {`(${capitalize(planType)})`}
            </span>
            <button
              className="text-cool-gray tracking-tight font-medium text-sm underline"
              onClick={() => goToStep(PLANS_STEP)}
            >
              Change
            </button>
          </div>
          <div className="text-marine-blue font-semibold tracking-tight">
            ${planPrice}/{priceSuffix}
          </div>
        </div>
        <ul className="flex flex-col">
          {addOns.map(({ name, price }, index) => (
            <li key={index} className="flex justify-between items-center mb-3">
              <span className="text-cool-gray tracking-tight font-medium text-sm">{name}</span>
              <span className="text-marine-blue font-medium tracking-tight text-sm">
                +${price}/{priceSuffix}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between items-center px-6">
        <span className="text-cool-gray tracking-tight font-medium text-sm">Total {`(per ${totalSuffix})`}</span>
        <span className="text-purplish-blue font-bold tracking-tight text-lg">
          +${totalPrice}/{priceSuffix}
        </span>
      </div>
    </Fragment>
  )
}
