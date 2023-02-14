import { useState } from 'react'
import { IoIosPlanet, IoIosSunny, IoIosRocket, IoIosMoon} from "react-icons/io";

import { ContainerSection } from './components/Containers/Section'
import { ContainerText } from './components/Containers/Text'
import { Header } from './components/Header'
import { SubTitle } from './components/SubTitle'
import { Title } from './components/Title'

import './App.scss'
import { ContainerOrbit } from './components/Containers/Orbit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <ContainerSection>
        <ContainerOrbit planet='saturn'>
          <IoIosPlanet color='#242424' fontSize={120} />
        </ContainerOrbit>
        <ContainerOrbit planet='uranus'>
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
        </ContainerOrbit>
        <ContainerText>
          <SubTitle>Otávio Sedano</SubTitle>
          <Title>Desenvolvedor Web</Title>
          <SubTitle>Lorem ipsum dolor sit amet consectetur. amet consectetur amet consectetur.</SubTitle>
        </ContainerText>
      </ContainerSection>
    </>
  )
}

export default App
