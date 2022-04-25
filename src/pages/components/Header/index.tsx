import Image from 'next/image'
import Link from 'next/link'
import ImageHeader from '../../../assets/header.png'
import { Container, FitContainer } from './styles'

export const Header = () => {
  return(
    <Container>
       <Image id="image" src={ImageHeader} alt="" />
       <FitContainer>
         <p>Paulo Ricardo Rodrigues Claro</p>
         <select name="disciplina">
           <option value="sdf">Sistemas de Informações</option>
         </select>
         <span></span>
         <Link href="/">
          <button>Sair</button>
         </Link>
       </FitContainer>
    </Container>
  )
}