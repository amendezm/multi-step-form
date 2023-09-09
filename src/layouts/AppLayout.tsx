import { Outlet } from "react-router-dom"

import { Sidebar } from "@/components"

export const AppLayout = () => {
  return (
    <section className="bg-white rounded-xl p-4 h-[560px] w-[860px] shadow-3xl grid grid-cols-3">
      <div className="col-span-1 mr-4">
        <Sidebar />
      </div>
      <div className="col-span-2">
        <Outlet />
      </div>
    </section>
  )
}
