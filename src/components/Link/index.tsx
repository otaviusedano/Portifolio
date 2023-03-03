import "./styles.scss"

export function Link({ children, to, isInfo }: any) {
  return (
    <a
      target="_blank"
      href={to}
      className={`link ${isInfo ? "info" : ""}`}
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
