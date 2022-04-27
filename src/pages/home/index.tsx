import Cards from "../components/Cards"
import Header from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Container, Content } from "./styles"

export const Home = () => {
  return(
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <Cards />
      </Content>
    </Container>
  )
}

export default Home