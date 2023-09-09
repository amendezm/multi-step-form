import { useNavigate } from "react-router-dom"

import { Button } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { useAddOns, usePersonalInfo, usePlan, useSteps } from "@/hooks"

import { Summary } from "./Summary"

export const FinishUp = () => {
  const { prevStep, resetStep } = useSteps()
  const { resetInfo } = usePersonalInfo()
  const { resetPlan } = usePlan()
  const { resetAddOns } = useAddOns()
  const navigate = useNavigate()

  const handleConfirm = () => {
    resetInfo()
    resetPlan()
    resetAddOns()
    resetStep()
    navigate("/thank-you")
  }

  return (
    <FormLayout>
      <Summary />
      <ButtonsLayout>
        <Button secondary onClick={prevStep}>
          Go Back
        </Button>
        <Button className="bg-purplish-blue" onClick={handleConfirm}>
          Confirm
        </Button>
      </ButtonsLayout>
    </FormLayout>
  )
}
