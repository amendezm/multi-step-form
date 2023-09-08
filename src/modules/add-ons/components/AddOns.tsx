import { Button, Form } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { useAddOns, useSteps } from "@/hooks"

import { AddOnsOptions } from "./AddOnsOptions"

export const AddOns = () => {
  const { prevStep, nextStep } = useSteps()
  const { addOns, saveAddOns } = useAddOns()

  return (
    <Form
      defaultValues={{ addOns }}
      onSubmit={({ addOns }) => {
        saveAddOns(addOns)
        nextStep()
      }}
      className="h-full"
    >
      <FormLayout>
        <AddOnsOptions />
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
