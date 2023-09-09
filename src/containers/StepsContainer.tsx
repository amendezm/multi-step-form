import { AddOnsModule, FinishUpModule, PersonalInfoModule, PlansModule } from "@/modules"
import { useSteps } from "@/hooks"

const stepsModules = [new PersonalInfoModule(), new PlansModule(), new AddOnsModule(), new FinishUpModule()]

export const StepsContainer = () => {
  const { step } = useSteps()
  const currentStepModule = stepsModules[step]

  const { title, description, renderElement } = currentStepModule

  return (
    <div className="h-full flex flex-col px-16 pt-8 pb-4">
      <h1 className="text-3xl text-marine-blue font-bold mb-2">{title}</h1>
      <p className="text-cool-gray tracking-tight mb-8 font-medium">{description}</p>
      {renderElement}
    </div>
  )
}
