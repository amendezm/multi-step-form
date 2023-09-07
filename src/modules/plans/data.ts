import iconArcade from "@/assets/icon-arcade.svg"
import iconAdvanced from "@/assets/icon-advanced.svg"
import iconPro from "@/assets/icon-pro.svg"

interface PlanOption {
  id: number
  name: string
  monthlyPrice: number
  yearlyPrice: number
  icon: string
}

export const planOptions: PlanOption[] = [
  { id: 1, name: "Arcade", monthlyPrice: 9, yearlyPrice: 90, icon: iconArcade },
  { id: 2, name: "Advanced", monthlyPrice: 12, yearlyPrice: 120, icon: iconAdvanced },
  { id: 3, name: "Pro", monthlyPrice: 15, yearlyPrice: 150, icon: iconPro }
]
