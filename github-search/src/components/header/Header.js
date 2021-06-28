import arrow from '../../assets/arrow.png'
import { Container } from './HeaderStyled'
import { useHistory } from 'react-router-dom'
import { goToHome } from '../../routes/coordinator'

function Header(props) {
  const history = useHistory()

  return <Container>
    <button onClick={() => goToHome(history)}><img src={arrow} alt={"back arrowicon"} /><p>Voltar</p></button>
  </Container>
}

export default Header