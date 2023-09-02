import { FC, InputHTMLAttributes } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { options?: RegisterOptions }

export const Field: FC<FieldProps> = ({ options = {}, name, ...props }) => {
  const { register } = useFormContext()

  return <input {...(name ? register(name, options) : {})} {...props} />
}
