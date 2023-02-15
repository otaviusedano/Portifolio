import './styles.scss'

export function ContainerSection ({children, sectionName, id}: any) {
  return (
    <section id={id} className={`section ${sectionName}`}>
      {children}
    </section>
  )
}