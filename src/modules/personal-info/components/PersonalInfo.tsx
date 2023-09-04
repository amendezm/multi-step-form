import { Field, Form } from "@/components"

export const PersonalInfo = () => {
  return (
    <Form
      onSubmit={data => {
        console.log(data)
      }}
      className="space-y-5"
    >
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
        placeholder="e.g. +1 234 567 890"
        options={{ required: true, validate: { invalidPhoneNumber: validatePhoneNumber } }}
        inputMode="tel"
      />
    </Form>
  )
}

const validateEmail = (email: string) => {
  const res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
  return res.test(String(email).toLowerCase()) || "Invalid email address"
}

const validatePhoneNumber = (phoneNumber: string) => {
  const res = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
  return res.test(String(phoneNumber).toLowerCase()) || "Invalid phone number"
}