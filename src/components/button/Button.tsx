import { classNames } from "@/utils"
import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  secondary?: boolean
}

export const Button: FC<ButtonProps> = ({ className, children, secondary, ...props }) => {
  return (
    <button
      className={classNames(
        "px-7 py-2.5 bg-marine-blue text-magnolia rounded-lg tracking-tight font-medium hover:bg-purplish-blue hover:opacity-75",
        className,
        {
          "p-0 bg-transparent text-cool-gray hover:bg-transparent": secondary
        }
      )}
      {...props}
    >
      {children}
    </button>
  )
}
