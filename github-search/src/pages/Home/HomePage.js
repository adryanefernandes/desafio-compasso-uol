import { useInput } from '../../hooks/useInput'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { goToSearchPage } from '../../routes/coordinator'
import { Input, Logo, Title, Form, MagnifyingGlass, ButtonSearch, Main } from './HomePageStyled'
import githubLogo from '../../assets/github.png'
import magnifyingGlass from '../../assets/magnifyingGlass.png'

function HomePage() {
  const history = useHistory()
  const params = useParams()

  const [value, handleInput] = useInput(params.user)

  return <Main>
      <Logo src={githubLogo} alt={"github logo"} />
      <Title>Busca por perfis no gitHub</Title>
      <Form>
        <Input
          placeholder={"Nome do usuário"}
          value={value}
          onChange={handleInput}
        />
        <ButtonSearch onClick={() => goToSearchPage(history, value)}>
          <MagnifyingGlass src={magnifyingGlass} alt={"magnifying glass icon"} />
        </ButtonSearch>
      </Form>
  </Main>
}

export default HomePage