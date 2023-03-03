import {
  IoLogoWhatsapp,
  IoLogoLinkedin,
  IoIosMail,
  IoIosPlanet,
  IoLogoGithub,
} from "react-icons/io"

import { ContainerLinks } from "../Containers/Links"
import { ContainerLogo } from "../Containers/Logo"

import "./styles.scss"

export function Footer() {
  const messageToSend =
    "Oi, eu vi seu site e achei incrível! gostaria de conversar com você. tudo bem?"

  const linkToWhatssap = `https://api.whatsapp.com/send?phone=5519998845086&text=${messageToSend}`
  const linkToEmail = "mailto:sedanootavio@gmail.com"
  const linkToGitHub = "https://github.com/otaviusedano"
  const linkToLinkedin =
    "https://www.linkedin.com/in/ot%C3%A1vio-sedano-da-silva-b0090a20b/"

  return (
    <footer>
      <div className="container__content">
        <div className="logo">
          <ContainerLogo>
            <IoIosPlanet color="#242424" fontSize="1.4rem" />
            <h1>Otávio</h1>
          </ContainerLogo>
        </div>
        <ContainerLinks>
          <a href={linkToEmail} rel="noreferrer">
            <IoIosMail fontSize={20} />
            <span>sedanootavio@gmail.com</span>
          </a>
        </ContainerLinks>
        <ContainerLinks>
          <a target="_blank" href={linkToWhatssap} rel="noreferrer">
            <IoLogoWhatsapp fontSize={20} />
            <span>+55 19 998845086</span>
          </a>
        </ContainerLinks>
        <ContainerLinks>
          <a target="_blank" href={linkToGitHub} rel="noreferrer">
            <IoLogoGithub fontSize={20} />
            <span>otaviusedano</span>
          </a>
        </ContainerLinks>
        <ContainerLinks>
          <a target="_blank" href={linkToLinkedin} rel="noreferrer">
            <IoLogoLinkedin fontSize={20} />
            <span>otávio-sedano-da-silva</span>
          </a>
        </ContainerLinks>
      </div>
    </footer>
  )
}
