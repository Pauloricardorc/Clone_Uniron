import { Card, Container } from "./styles"

export const Cards = () => {
  return(
    <Container>
      <Card>
        <img src="https://cdn.pixabay.com/photo/2014/03/24/17/14/education-295185_1280.png" alt="" />
        <p>Ambiente Virtual de Aprendizagem</p>
      </Card>
      <Card>
        <img src="https://images.vexels.com/media/users/3/255748/isolated/preview/defed5a5778e3d354a908a2defc5742e-school-classroomicons-handcutsimpleshapes-60-4.png" alt="" />
        <p>Minha Biblioteca</p>
      </Card>
      <Card>
        <img src="https://static.vecteezy.com/system/resources/previews/001/187/079/non_2x/chart-png.png" alt="" />
        <p>Notas e Faltas</p>
      </Card>
      <Card>
        <img src="https://cdn-icons-png.flaticon.com/512/2150/2150264.png" alt="" />
        <p>Boletos</p>
      </Card>
      <Card>
        <img src="https://www.picng.com/upload/book/png_book_29306.png" alt="" />
        <p>Reservar Livro</p>
      </Card>
      <Card>
        <img src="https://www.gov.br/compras/pt-br/images/IconesDiversos/manual-book.png" alt="" />
        <p>Periódicos Online</p>
      </Card>
      <Card>
        <img src="https://www.tjpr.jus.br/documents/15390/5492064/icon-Bi.png/3ff58636-ba62-a1ba-159c-bd98dfda085d?t=1625767148372" alt="" />
        <p>Regulamento Institucional do Regime de Guarda Religiosa</p>
      </Card>
    </Container>
  )
}

export default Cards