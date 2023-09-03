import { Module } from "../Module"

class AddOnsModule extends Module {
  constructor() {
    super()
    this.title = "Pick add-ons"
    this.description = "Add-ons help enhance your gaming experience."
    this.renderElement = null
  }
}

export { AddOnsModule }
