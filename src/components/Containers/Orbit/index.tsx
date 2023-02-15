import './styles.scss'

export function ContainerOrbit ({children, planet = ''}: any) {
  return (
    <div className='orbit'>
      <div className={`rotation ${planet}`}>
        {children}
      </div>
    </div>
  )
}