import { classNames } from "@/utils"
import { FC, InputHTMLAttributes } from "react"
import { RegisterOptions, useFormContext } from "react-hook-form"

type InputProps = InputHTMLAttributes<HTMLInputElement> & { options?: RegisterOptions }

export const Input: FC<InputProps> = ({ options = {}, name = "", className, ...props }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  return (
    <input
      className={classNames(
        "cursor-pointer border border-light-gray px-3 py-2 rounded-lg tracking-tighter placeholder:font-medium placeholder:text-cool-gray focus-visible:outline-none focus-visible:border-purplish-blue",
        className,
        { "border-strawberry-red focus-visible:border-strawberry-red": errors[name] }
      )}
      autoComplete="off"
      {...(name ? register(name, options) : {})}
      {...props}
    />
  )
}
