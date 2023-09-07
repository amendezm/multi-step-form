import { Children, FC, PropsWithChildren } from "react"

export const FormLayout: FC<PropsWithChildren> = ({ children }) => {
  const arrayChildren = Children.toArray(children)

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-5">{arrayChildren.slice(0, -1)}</div>
      {arrayChildren.slice(-1)}
    </div>
  )
}
