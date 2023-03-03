import { PropsWithChildren } from "react"

import "./styles.scss"
export function BodyText({ children }: PropsWithChildren) {
  return <span className="body-text">{children}</span>
}
