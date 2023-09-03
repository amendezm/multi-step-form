import { Module } from "../Module"

class PersonalInfoModule extends Module {
  constructor() {
    super()
    this.title = "Personal info"
    this.description = "Please provide your name, email address and phone number."
    this.renderElement = null
  }
}

export { PersonalInfoModule }
