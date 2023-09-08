import { Button, Form } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { useSteps } from "@/hooks"

import { AddOnsOptions } from "./AddOnsOptions"

export const AddOns = () => {
  const { prevStep } = useSteps()

  return (
    <Form
      defaultValues={{}}
      onSubmit={data => {
        console.log(data)
        // nextStep()
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
