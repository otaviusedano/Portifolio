import { IoIosPlanet } from "react-icons/io"
import { Link as LinkScroll } from "react-scroll"

import projeto1 from "./assets/project 1.png"
import projeto2 from "./assets/project 2.png"
import projeto3 from "./assets/project 3.png"
import projeto4 from "./assets/project 4.png"
import { ContainerLinks } from "./components/Containers/Links"
import { ContainerOrbit } from "./components/Containers/Orbit"
import { ContainerProjects } from "./components/Containers/Projects"
import { ContainerSection } from "./components/Containers/Section"
import { ContainerText } from "./components/Containers/Text"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { IntrodutionText } from "./components/IntrodutionText"
import { Link } from "./components/Link"
import { Project } from "./components/Project"
import { SubTitle } from "./components/SubTitle"
import { Title } from "./components/Title"
import { BodyText } from "./components/BodyText"

import "./App.scss"

function App() {
  return (
    <>
      <Header />
      <ContainerOrbit planet="saturn">
        <IoIosPlanet color="#242424" fontSize={120} />
      </ContainerOrbit>
      <ContainerOrbit planet="uranus">
        <IoIosPlanet color="blue" fontSize={80} />
      </ContainerOrbit>
      <ContainerSection id="main">
        <ContainerText>
          <IntrodutionText>OTAVIO SEDANO</IntrodutionText>
          <Title>Um estudante entusiasta no desenvolvimento Web</Title>
          <SubTitle>
            Um jovem apaixonado pela tecnologia, em busca de novos desafios como
            programador.
          </SubTitle>
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
              <Link>Sobre mim</Link>
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
              <Link>Projetos</Link>
            </LinkScroll>
          </ContainerLinks>
        </ContainerText>
      </ContainerSection>
      <ContainerSection id="projects">
        <ContainerText>
          <IntrodutionText>SELECIONADOS</IntrodutionText>
          <Title>Projetos</Title>
        </ContainerText>
        <ContainerProjects>
          <Project
            img={projeto1}
            linkToProject="https://translation-rouge.vercel.app/"
            linkToCode="https://github.com/otaviusedano/translation"
            projectName="Translation"
            techs={[
              "HTML5",
              "CSS3",
              "AXIOS",
              "JAVASCRIPT",
              "REACT",
              "SCSS",
              "LOCALSTORAGE",
            ]}
          />
          <Project
            img={projeto2}
            linkToProject="https://checked-cbfcf.web.app/"
            linkToCode="https://github.com/otaviusedano/checked-habits-2.0v-"
            projectName="Habits 2.0"
            techs={["HTML5", "CSS3", "JAVASCRIPT", "FIREBASE", "REACT", "SCSS"]}
          />
          <Project
            img={projeto3}
            projectName="Pokemon Search"
            linkToProject="https://pokemon-search-angular.vercel.app/"
            linkToCode="https://github.com/otaviusedano/pokemon-search-V2-angular"
            link="https://translation-rouge.vercel.app/"
            techs={[
              "HTML5",
              "CSS3",
              "SCSS",
              "JAVASCRIPT",
              "ANGULAR",
              "CONSUMO DE API",
            ]}
          />
          <Project
            img={projeto4}
            linkToProject="https://otaviusedano.github.io/rocket-coffee/"
            linkToCode="https://github.com/otaviusedano/rocket-coffee"
            projectName="Rocket Coffee"
            techs={["HTML5", "CSS3", "JAVASCRIPT", "DOM"]}
          />
        </ContainerProjects>
      </ContainerSection>
      <ContainerSection id="about">
        <ContainerText>
          <IntrodutionText>SOBRE MIM</IntrodutionText>
          <Title>
            Ol??, Eu me chamo Ot??vio Sedano, sou um desenvolvedor Front-end que
            foca na cria????o de projetos inteligentes e visualmente inovadores.
          </Title>
          <br />
          <BodyText>
            H?? mais de um ano atr??s eu iniciava a minha carreira como
            desenvolvedor, sem saber muito o que esse mundo tinha a me oferecer.
            Descobri um grande interresse em JavaScript quando programei uma
            simples fun????o de soma, Desde ent??o j?? desenvolvi diversos projetos
            com essa linguagem de programa????o incr??vel, procurando me aprofundar
            cada vez mais na minha paix??o, a programa????o web.
          </BodyText>
          <BodyText>
            Hoje estou graduando Desenvolvimento Full Stack pela Est??cio.
          </BodyText>
          <br />
          <br />
          <br />
          <IntrodutionText>ALGUNS PROJETOS</IntrodutionText>
          <ContainerProjects role="text">
            <Link to="https://translation-rouge.vercel.app/">Translation</Link>
            <em>/</em>
            <Link to="https://checked-cbfcf.web.app/">Habits 2.0</Link>
            <em>/</em>
            <Link to="https://to-buy.vercel.app/">ToBuy</Link>
            <em>/</em>
            <Link to="https://noteread-732b5.web.app">Noteready</Link>
            <em>/</em>
            <Link to="https://pokemon-search-angular.vercel.app/">
              Pokemon Search
            </Link>
          </ContainerProjects>
          <br />
          <br />
          <IntrodutionText>TECNOLOGIAS USADAS</IntrodutionText>
          <ContainerProjects role="text">
            <Link isInfo>React</Link>
            <em>/</em>
            <Link isInfo>TypeScript</Link>
            <em>/</em>
            <Link isInfo>Angular</Link>
            <em>/</em>
            <Link isInfo>JavaScript</Link>
            <em>/</em>
            <Link isInfo>Firebase</Link>
            <em>/</em>
            <Link isInfo>Scss</Link>
            <em>/</em>
            <Link isInfo>HTML5</Link>
            <em>/</em>
            <Link isInfo>CSS3</Link>
            <em>/</em>
            <Link isInfo>LocalStorage</Link>
            <em>/</em>
            <Link isInfo>Axios</Link>
          </ContainerProjects>
        </ContainerText>
      </ContainerSection>
      <Footer />
    </>
  )
}

export default App
