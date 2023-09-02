import { FC } from "react"
import { useFormContext } from "react-hook-form"

interface ErrorProps {
  name: string
}

export const ErrorMessage: FC<ErrorProps> = ({ name }) => {
  const {
    formState: { errors }
  } = useFormContext()

  if (!errors[name]) {
    return null
  }

  return <p className="text-sm text-red-400">{`${errors?.[name]?.message}`}</p>
}
