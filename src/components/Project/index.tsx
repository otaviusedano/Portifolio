import { Link } from "../Link"
import "./styles.scss"

export function Project({
  img,
  linkToProject,
  projectName,
  techs,
  linkToCode,
}: any) {
  return (
    <div className="project">
      <img src={img} alt="imagem do projeto" />
      <div>
        <div className="container__info">
          <h1>{projectName}</h1>
          <div className="infos">
            {techs?.map((tech: string) => (
              <Link isInfo key={tech}>
                {tech}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container__links">
        <Link to={linkToProject}>Ver Projeto</Link>
        <Link to={linkToCode}>Ver Código</Link>
      </div>
    </div>
  )
}
