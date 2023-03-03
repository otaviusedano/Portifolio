import "./styles.scss"

export function ContainerProjects({ children, role }: any) {
  return (
    <div role={role} className="container__projects">
      {children}
    </div>
  )
}
