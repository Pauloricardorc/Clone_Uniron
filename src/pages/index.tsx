import type { NextPage } from 'next'
import { Container, ContainerInput, ContainerLogin, LoginContainer } from './styles'
import UnironLogo from '../assets/uniron.png'
import Image from 'next/image'
import Link from 'next/link'

export const Home = () => {
  return (
    <Container>
      <LoginContainer>
        <div>
          <Image id="image" src={UnironLogo} alt="logo do portal do aluno" height={150} />
          <p>Bem-vindo ao Portal do Aluno!</p>
        </div>
        <ContainerLogin>
          <ContainerInput>
            <label htmlFor="login">Login:</label>
            <input type="text" placeholder='informe seu login' />
          </ContainerInput>
          <ContainerInput>
            <label htmlFor="password">Senha:</label>
            <input type="password" placeholder='informe sua senha' />
          </ContainerInput>
          <ContainerInput>
            <select name="unidade">
              <option value="0">UNIRON</option>
              <option value="1">UNIPEC</option>
            </select>
          </ContainerInput>
          <a href="">Recuperar a senha</a>
        </ContainerLogin>
        <div>
          <Link href='home'>
            <button>
              <span>Acessar</span>
            </button>
          </Link>
        </div>
      </LoginContainer>
    </Container>
  )
}

export default Home
