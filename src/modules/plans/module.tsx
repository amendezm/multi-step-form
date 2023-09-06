import { Module } from "../Module"

import { Plans } from "./components"

class PlansModule extends Module {
  constructor() {
    super()
    this.title = "Select your plan"
    this.description = "You have the option of monthly or yearly billing."
    this.renderElement = <Plans />
  }
}

export { PlansModule }
