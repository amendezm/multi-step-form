import { Button, Form } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { usePlan, useSteps } from "@/hooks"

import { PlanOptions } from "./PlanOptions"
import { PlanTypeSelector } from "./PlanTypeSelector"

export const Plans = () => {
  const { prevStep, nextStep } = useSteps()
  const { plan, savePlan } = usePlan()

  return (
    <Form
      defaultValues={plan}
      onSubmit={data => {
        savePlan(data)
        nextStep()
      }}
      className="h-full"
    >
      <FormLayout>
        <PlanOptions />
        <PlanTypeSelector />
        <ButtonsLayout>
          <Button secondary onClick={prevStep}>
            Go Back
          </Button>
          <Button type="submit">Next Step</Button>
        </ButtonsLayout>
      </FormLayout>
    </Form>
  )
}
