import { Children, FC, PropsWithChildren } from "react"

import { classNames } from "@/utils"

export const ButtonsLayout: FC<PropsWithChildren> = ({ children }) => {
  const arrayChildren = Children.toArray(children)

  return (
    <div className={classNames("w-full flex justify-end z-20 mt-12", { "justify-between": !!arrayChildren[1] })}>
      {arrayChildren[0]}
      {arrayChildren[1]}
    </div>
  )
}
