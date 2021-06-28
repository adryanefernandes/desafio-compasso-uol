import arrow from '../../assets/arrow.png'
import {Container} from './HeaderStyled'

function Header() {
  return <Container>
    <button><img src={arrow} alt={"back arrowicon"} />Voltar</button>
  </Container>
}

export default Header