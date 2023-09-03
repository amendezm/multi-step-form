import { Module } from "../Module"

class FinishUpModule extends Module {
  constructor() {
    super()
    this.title = "Finishing up"
    this.description = "Double-check everything looks OK before confirming."
    this.renderElement = null
  }
}

export { FinishUpModule }
