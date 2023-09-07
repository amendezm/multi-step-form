import { Module } from "../Module"

import { AddOns } from "./components"

class AddOnsModule extends Module {
  constructor() {
    super()
    this.title = "Pick add-ons"
    this.description = "Add-ons help enhance your gaming experience."
    this.renderElement = <AddOns />
  }
}

export { AddOnsModule }
