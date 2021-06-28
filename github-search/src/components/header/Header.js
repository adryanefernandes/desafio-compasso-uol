import arrow from '../../assets/arrow.png'
import { useInput } from '../../hooks/useInput'
import { Container } from './HeaderStyled'
import { useHistory, useParams } from 'react-router-dom'
import { goBack, goToHome } from '../../routes/coordinator'
import { Form } from './HeaderStyled'
import magnifyingGlass from '../../assets/magnifyingGlass.png'

function Header(props) {
  const history = useHistory()
  const params = useParams()

  const [value, handleInput] = useInput(params.user)

  const changeButton = () => {
    if(props.page === 'search'){
      goToHome(history)
    } else if(props.page === 'details'){
      goBack(history)
    }
  }
  

  return <Container>
    <button onClick={changeButton}><img src={arrow} alt={"back arrowicon"} /><p>Voltar</p></button>

    <Form>
      <input
        placeholder={"Nome do usuário"}
        value={value}
        onChange={handleInput}
      />
      <button onClick={changeButton}>
        <img src={magnifyingGlass} alt={"magnifying glass icon"} />
      </button>
    </Form>
  </Container>
}

export default Header