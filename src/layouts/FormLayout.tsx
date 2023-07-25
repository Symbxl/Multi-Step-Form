
import { ReactNode } from "react"

type FormLayoutProps = {
  title: string
  children: ReactNode
}
const FormLayout = ({ title, children }: FormLayoutProps) => {
  return <>
    <h2>{title}</h2>
    <div>
      {children}
    </div>
  </>
}

export default FormLayout;