import { AddOnsModule, FinishUpModule, PersonalInfoModule, PlansModule } from "@/modules"
import { useSteps } from "@/hooks"

const stepsModules = [new PersonalInfoModule(), new PlansModule(), new AddOnsModule(), new FinishUpModule()]

export const StepsContainer = () => {
  const { step } = useSteps()
  const currentStepModule = stepsModules[step - 1]

  const { title, description, renderElement } = currentStepModule

  return (
    <div className="flex flex-col px-12 pt-8">
      <div>
        <h1 className="text-3xl text-marine-blue font-bold mb-2">{title}</h1>
        <p className="text-cool-gray tracking-tight">{description}</p>
        {renderElement}
      </div>
    </div>
  )
}
