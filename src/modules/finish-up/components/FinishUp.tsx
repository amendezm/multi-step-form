import { useNavigate } from "react-router-dom"

import { Button } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { useSteps } from "@/hooks"

import { Summary } from "./Summary"

export const FinishUp = () => {
  const { prevStep } = useSteps()
  const navigate = useNavigate()

  return (
    <FormLayout>
      <Summary />
      <ButtonsLayout>
        <Button secondary onClick={prevStep}>
          Go Back
        </Button>
        <Button className="bg-purplish-blue" onClick={() => navigate("/thank-you")}>
          Confirm
        </Button>
      </ButtonsLayout>
    </FormLayout>
  )
}
