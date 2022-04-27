import { Container } from "./styles"

export const Header = () => {
  return(
    <Container>
      <p>Paulo Ricardo Rodrigues Claro</p>
      <select name="curso" id="curso">
        <option value="sdf">Sistemas de Informação</option>
        <option value="sdf">Redes de Computadores</option>
      </select>
      <span></span>
      <button>Sair</button>
    </Container>
  )
}

export default Header