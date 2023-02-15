import { IoLogoWhatsapp, IoLogoLinkedin, IoIosMail, IoIosPlanet, IoLogoGithub } from 'react-icons/io'
import { ContainerLinks } from '../Containers/Links'
import { ContainerLogo } from '../Containers/Logo'

import './styles.scss'

export function Footer () {

  const messageToSend = 'Oi, eu vi seu site e achei incrível! gostaria de conversar com você. tudo bem?'

  const linkToWhatssap = `https://api.whatsapp.com/send?phone=5519998845086&text=${messageToSend}`

  return (
    <footer>
      <div className='container__content'>
        <div className='logo'>
          <ContainerLogo>
            <IoIosPlanet color="#242424" fontSize="1.4rem"/>
            <h1>Otávio</h1>
          </ContainerLogo>
        </div>
        <ContainerLinks>
          <a target='_blank' href="">
            <IoIosMail fontSize={20}/>
            <span>sedanootavio@gmail.com</span>
          </a>
        </ContainerLinks>
        <ContainerLinks>
          <a target='_blank' href={linkToWhatssap}>
            <IoLogoWhatsapp fontSize={20} />
            <span>+55 19 998845086</span>
          </a>
        </ContainerLinks>
        <ContainerLinks>
          <a target='_blank' href="">
            <IoLogoGithub fontSize={20} />
            <span>otaviusedano</span>
          </a>
        </ContainerLinks>
        <ContainerLinks>
          <a target='_blank' href="">
            <IoLogoLinkedin fontSize={20} />
            <span>otávio-sedano-da-silva</span>
          </a>
        </ContainerLinks>
      </div>
    </footer>
  )
}