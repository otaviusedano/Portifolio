import { useState } from 'react'

import { IoIosEye, IoIosNavigate, IoIosEyeOff } from 'react-icons/io'
import { BodyText } from '../BodyText'
import './styles.scss'

export function Project ({img, link, projectName, bodyText}: any) {
  const [ isView, setIsView ] = useState(false)

  return (
    <div className='project' onClick={() => isView ? setIsView(false) : setIsView(!isView)}>
      <div className={`${isView ? 'overlay' : 'no-overlay'}`}>
        {
          isView 
            ?
            <div className='container__info'>
              <h1>{projectName}</h1>
              <div className='infos'>
                <BodyText>{bodyText}</BodyText>
                <BodyText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ut animi commodi. adipisicing elit. Possimus ut animi commodi.</BodyText>
              </div>
            </div>
            : 
              null
        }
      </div>
      <img className={`${isView ? 'opacity' : ''}`} src={img} alt='imagem do projeto' />
      <div>
        {
          isView
            ?
              <IoIosEye className='icone view' fontSize={26} color={'#242424'} />
            :
              <IoIosEyeOff className='icone view' fontSize={26} color={'#242424'} />
        }
      </div>
        <a target="_blank" href={link}>
          <IoIosNavigate className='icone navigate' fontSize={26} color={'#242424'} />
        </a>
    </div>
  )
}