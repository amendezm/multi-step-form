import { Module } from "../Module"

import { FinishUp } from "./components"

class FinishUpModule extends Module {
  constructor() {
    super()
    this.title = "Finishing up"
    this.description = "Double-check everything looks OK before confirming."
    this.renderElement = <FinishUp />
  }
}

export { FinishUpModule }
