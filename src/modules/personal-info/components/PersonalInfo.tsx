import { Button, Field, Form } from "@/components"
import { ButtonsLayout, FormLayout } from "@/layouts"
import { usePersonalInfo, useSteps } from "@/hooks"

export const PersonalInfo = () => {
  const { info, saveInfo } = usePersonalInfo()
  const { nextStep } = useSteps()

  return (
    <Form
      defaultValues={info}
      onSubmit={data => {
        saveInfo(data)
        nextStep()
      }}
      className="h-full"
    >
      <FormLayout>
        <Field
          name="name"
          label="Name"
          placeholder="e.g. Stephen King"
          options={{
            required: true
          }}
          inputMode="text"
        />
        <Field
          name="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          options={{ required: true, validate: { invalidEmail: validateEmail } }}
          inputMode="email"
        />
        <Field
          name="phone"
          label="Phone Number"
          placeholder="e.g. +1 234 567 8901"
          options={{ required: true, validate: { invalidPhoneNumber: validatePhoneNumber } }}
          inputMode="tel"
        />
        <ButtonsLayout>
          <Button type="submit">Next Step</Button>
        </ButtonsLayout>
      </FormLayout>
    </Form>
  )
}

const validateEmail = (email: string) => {
  const res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  return res.test(String(email).toLowerCase()) || "Invalid email address"
}

const validatePhoneNumber = (phoneNumber: string) => {
  const res = /^(\+1)?[- ]?\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
  return res.test(String(phoneNumber).toLowerCase()) || "Invalid phone number"
}
