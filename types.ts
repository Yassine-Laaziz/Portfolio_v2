export interface project {
  name: string
  description: string
  image: string
  source_code_link?: string
  remaining?: number
  tags?: { name: string; color: string }[]
  stack?: { img: string; alt: string }[]
}

export interface experience {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}
