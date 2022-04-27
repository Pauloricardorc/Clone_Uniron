import { Container, ImageContainer } from './styles'
import LogoImage from '../../../assets/uniron.png'
import Image from 'next/image'
import { Navigation } from 'react-minimal-side-navigation/lib'
import { AiFillHome } from 'react-icons/ai'
import { FaDollarSign, FaLink, FaSwatchbook, FaUserGraduate } from 'react-icons/fa'
import { MdSupportAgent } from 'react-icons/md'
import { GiBlackBook } from 'react-icons/gi'
import { RiSettings4Fill } from 'react-icons/ri'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';


export const Sidebar = () => {
  return(
    <Container>
      <ImageContainer>
        <Image src={LogoImage} alt="logo da uniron" />
      </ImageContainer>
      <Navigation
            // you can use your own router's api to get pathname
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
              {
                title: 'Painel Inicial',
                itemId: '/painelinicial',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <AiFillHome name="inicio" />,
              },
              {
                title: 'Acadêmico',
                itemId: '/academico',
                elemBefore: () => <FaUserGraduate name="academico" />,
                subNav: [
                  {
                    title: 'Notas e Faltas',
                    itemId: '/academico/notas&faltas',
                  },
                  {
                    title: 'Visualizar Horario',
                    itemId: '/academico/visualizarhorario',
                  },
                  {
                    title: 'Monte seu Horário',
                    itemId: '/academico/horario',
                  },
                  {
                    title: 'Minha Grade',
                    itemId: '/academico/grade',
                  },
                ],
              },
              {
                title: 'CIA Online',
                itemId: '/ciaonline',
                elemBefore: () => <MdSupportAgent name="cia" />,
                subNav: [
                  {
                    title: 'Solicitar Serviço',
                    itemId: '/cia/solicitar'
                  },
                  {
                    title: 'Ver serviços solicitados',
                    itemId: '/cia/visualizar'
                  },
                  {
                    title: 'Atendimento Online',
                    itemId: '/cia/atendimento'
                  },
                ]
              },
              {
                title: 'Financeiro',
                itemId: '/financeiro',
                elemBefore: () => <FaDollarSign name="financeiro" />,
                subNav: [
                  {
                    title: 'Boleto',
                    itemId: '/boleto'
                  },
                  {
                    title: 'Simulação de Mensalidade',
                    itemId: '/boleto/simulador'
                  }
                ]
              },
              {
                title: 'Biblioteca',
                itemId: '/biblioteca',
                elemBefore: () => <FaSwatchbook name="biblioteca" />,
                subNav: [ 
                  {title: 'Consultar empréstimos e reservas', itemId: '/biblioteca/emprestimo'},
                  {title: 'Reservar livro', itemId: '/biblioteca/reservar'},
                  {title: 'EBSCO', itemId: '/biblioteca/ebsco'},
                  {title: 'DynaMed', itemId: '/biblioteca/dynamed'},
                  {title: 'Periodicos Online', itemId: '/biblioteca/periodicos'},
                  {title: 'SciELO', itemId: '/biblioteca/scielo'},
                  {title: 'Domínio Público', itemId: '/biblioteca/dominioPublico'},
                  {title: 'Biblioteca Virtual em Saúde', itemId: '/biblioteca/saude'},
                  {title: 'LexMagister', itemId: '/biblioteca/magister'}
                ]
              },
              {
                title: 'Manual',
                itemId: '/manual',
                elemBefore: () => <GiBlackBook name="manual" />,
                subNav: [
                  {title: 'Regimento Interno Educação', itemId: '/manual/educacao'},
                  {title: 'Regimento Interno Interamericana', itemId: '/manual/interamericana'},
                  {title: 'Calendário Acadêmico', itemId: '/manual/calendario'},
                  {title: 'Manual Ajuste de Horário', itemId: '/manual/horario'},
                  {title: 'Requerimento Atividades', itemId: '/manual/atividades'},
                  {title: 'Complementares', itemId: '/manual/complementares'},
                  {title: 'Componente Curricular', itemId: '/manual/curricular'},
                  {title: 'Regulamento Tutorial Componente', itemId: '/manual/regulamento'},
                  {title: 'Curricular Prático', itemId: '/manual/pratico'}
                ]
              },
              {
                title: 'Link',
                itemId: '/link',
                elemBefore: () => <FaLink name="link" />,
                subNav: [
                  {
                    title: 'Aulas Remotas',
                    itemId: '/aulas/online'
                  }
                ]
              },
              {
                title: 'Opcões',
                itemId: '/opcoes',
                elemBefore: () => <RiSettings4Fill name="opcoes" />,
                subNav: [
                  {
                    title: 'Trocar Email',
                    itemId: '/config/email'
                  },
                  {
                    title: 'Trocar Senha',
                    itemId: '/config/senha'
                  }
                ]
              },
            ]}
          />
    </Container>
  )
}