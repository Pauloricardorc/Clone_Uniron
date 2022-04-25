import { Header } from "../components/Header"
import Menu from "../components/Menu"
import { Container, Content } from "./styles"

export const Home = () => {
  return(
    <Container>
      <Header />
      <Content>
        <Menu />
        <span>asdas</span>
      </Content>
    </Container>
  )
}

export default Home