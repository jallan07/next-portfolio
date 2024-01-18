export interface Role {
  company: string
  title: string
  logo?: string
  background?: string
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}
