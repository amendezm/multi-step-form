import { Button, Form } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"

export const Plans = () => {
  return (
    <Form
      defaultValues={{}}
      onSubmit={data => {
        console.log(data)
      }}
      className="h-full"
    >
      <FormLayout>
        <p>Hello World</p>
        <ButtonsLayout>
          <Button secondary>Go Back</Button>
          <Button type="submit">Next Step</Button>
        </ButtonsLayout>
      </FormLayout>
    </Form>
  )
}
