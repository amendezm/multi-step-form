import { Button } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { useSteps } from "@/hooks"

import { Summary } from "./Summary"

export const FinishUp = () => {
  const { prevStep } = useSteps()

  return (
    <FormLayout>
      <Summary />
      <ButtonsLayout>
        <Button secondary onClick={prevStep}>
          Go Back
        </Button>
        <Button type="submit" className="bg-purplish-blue">
          Confirm
        </Button>
      </ButtonsLayout>
    </FormLayout>
  )
}
