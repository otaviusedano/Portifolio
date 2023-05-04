import { IoIosPlanet, IoMdJournal, IoMdPerson } from "react-icons/io"
import { Link } from "react-scroll"

import { ContainerAnchor } from "../Containers/Anchor"
import { ContainerAnchors } from "../Containers/Anchors"
import { ContainerLogo } from "../Containers/Logo"

import "./styles.scss"

export function Header() {
  return (
    <header>
      <ContainerLogo>
        <IoIosPlanet color="#242424" fontSize="1.8rem" />
        <h1>Otávio</h1>
      </ContainerLogo>
      <ContainerAnchors>
        <ContainerAnchor>
          <IoMdJournal color="#242424" fontSize="1.1rem" />
          <Link
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={200}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <span>Projetos</span>
          </Link>
        </ContainerAnchor>
        <ContainerAnchor>
          <IoMdPerson color="#242424" fontSize="1.1rem" />
          <Link
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={200}
            isDynamic={true}
            ignoreCancelEvents={false}
          >
            <span>Perfil</span>
          </Link>
        </ContainerAnchor>
      </ContainerAnchors>
    </header>
  )
}
