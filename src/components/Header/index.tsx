import { IoIosPlanet, IoMdJournal, IoMdPerson } from "react-icons/io";
import { ContainerLink } from "../Containers/Link";
import { ContainerLogo } from "../Containers/Logo";

import './styles.scss'

export function Header () {
  return (
    <header>
      <ContainerLogo>
        <IoIosPlanet color="#242424" fontSize="1.8rem"/>
        <h1>Otávio</h1>
      </ContainerLogo>
      <ContainerLink>
        <IoMdJournal color="#242424" fontSize="1.3rem"/> Projects
      </ContainerLink>
      <ContainerLink>
        <IoMdPerson color="#242424" fontSize="1.3rem"/> Profile
      </ContainerLink>
    </header>
  )
}