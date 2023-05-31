export interface project {
  name: string
  description: string
  image: string
  website_link: string
  source_code_link?: string
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

export interface achievementT {
  age: number
  achievement: string
  description: string
  keyPoints: string[]
}
