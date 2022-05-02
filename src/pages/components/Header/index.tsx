import { Container } from "./styles"
import { AiOutlineUser } from 'react-icons/ai'
import Link from "next/link"

export const Header = () => {
  return(
    <Container>
      <p>
        <AiOutlineUser />
        Paulo Ricardo Rodrigues Claro
      </p>
      <select name="curso" id="curso">
        <option value="sdf">Sistemas de Informação</option>
        <option value="sdf">Redes de Computadores</option>
      </select>
      <span></span>
      <Link href="/">
        <button>
          Sair
        </button>
      </Link>
    </Container>
  )
}

export default Header