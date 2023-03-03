import "./styles.scss"

export function ContainerSection({ children, id }: any) {
  return (
    <section id={id} className="section">
      {children}
    </section>
  )
}
