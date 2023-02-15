import { IoIosPlanet, IoIosSunny, IoIosRocket, IoIosMoon} from "react-icons/io";

import { ContainerSection } from './components/Containers/Section'
import { ContainerText } from './components/Containers/Text'
import { Header } from './components/Header'
import { SubTitle } from './components/SubTitle'
import { Title } from './components/Title'
import { ContainerLinks } from './components/Containers/Links';
import { Link } from './components/Link';
import { ContainerOrbit } from './components/Containers/Orbit';
import { ContainerProjects } from './components/Containers/Projects';
import { Project } from './components/Project';
import { Link as LinkScroll, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import projeto1 from './assets/project 1.png'

import './App.scss'
import { Footer } from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <ContainerOrbit planet='saturn'>
        <IoIosPlanet color='#242424' fontSize={120} />
      </ContainerOrbit>
      <ContainerSection sectionName='main' id='main'>
        {/* <ContainerOrbit planet='uranus'>
          <IoIosPlanet color='blue' fontSize={80} />
        </ContainerOrbit>
        <ContainerOrbit planet='sun'>
          <IoIosSunny color='#242424' fontSize={120} />
        </ContainerOrbit>
        <ContainerOrbit planet='rocket'>
          <IoIosRocket color='#242424' fontSize={100} />
        </ContainerOrbit>
        <ContainerOrbit planet='moon'>
          <IoIosMoon color='#242424' fontSize={80} />
        </ContainerOrbit> */}
        <ContainerText>
          <SubTitle>OTAVIO SEDANO</SubTitle>
          <Title>Desenvolvedor Web</Title>
          <SubTitle>Lorem ipsum dolor sit amet consectetur. amet consectetur amet consectetur.</SubTitle>
          <ContainerLinks>
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={300}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <Link>
                Sobre mim
              </Link>
            </LinkScroll>
                      ou
            <LinkScroll
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              delay={300}
              isDynamic={true}
              ignoreCancelEvents={false}
            >
              <Link>
                Projetos
              </Link>
            </LinkScroll>
          </ContainerLinks>
        </ContainerText>
      </ContainerSection>
      <ContainerSection sectionName='projects' id='projects'>
        <ContainerText>
          <SubTitle>SELECIONADOS</SubTitle>
          <Title>Projetos</Title>
        </ContainerText>
        <ContainerProjects>
          <Project img={projeto1} link='https://translation-rouge.vercel.app/' projectName='Translation' bodyText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut animi commodi.' />
          <Project img={projeto1} link='https://translation-rouge.vercel.app/' projectName='Translation' bodyText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut animi commodi.' />
          <Project img={projeto1} link='https://translation-rouge.vercel.app/' />
        </ContainerProjects>
      </ContainerSection>
      <ContainerSection sectionName='about' id='about'>
      </ContainerSection>
      <Footer></Footer>
    </>
  )
}

export default App
