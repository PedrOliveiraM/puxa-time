export interface PlanCardProps {
  title: string
  price: string
  originalPrice: string
  period: string
  description: string
  isPopular?: boolean
  features: readonly string[]
}