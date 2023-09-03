import { Children, FC, PropsWithChildren } from "react"

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  const childrenArray = Children.toArray(children)

  return (
    <section className="bg-white rounded-xl p-4 h-[560px] w-[860px] shadow-3xl grid grid-cols-3">
      <div className="col-span-1 mr-4">{childrenArray[0]}</div>
      <div className="col-span-2">{childrenArray[1]}</div>
    </section>
  )
}
