import './styles.scss'

export function ContainerOrbit ({children, planet = ''}: any) {
  return (
    <div className={`orbit ${planet}`}>
      {children}
    </div>
  )
}