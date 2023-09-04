import { Module } from "../Module"

import { PersonalInfo } from "./components"

class PersonalInfoModule extends Module {
  constructor() {
    super()
    this.title = "Personal info"
    this.description = "Please provide your name, email address and phone number."
    this.renderElement = <PersonalInfo />
  }
}

export { PersonalInfoModule }
