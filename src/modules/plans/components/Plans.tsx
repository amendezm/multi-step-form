import { Button, Form, Switch } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { usePlan, useSteps } from "@/hooks"

import { PlanOptions } from "./PlanOptions"
import { useState } from "react"

export const Plans = () => {
  const { prevStep, nextStep } = useSteps()
  const { plan, savePlan } = usePlan()

  const [checked, setChecked] = useState(false)

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
        <Switch checked={checked} onChange={setChecked} />
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
