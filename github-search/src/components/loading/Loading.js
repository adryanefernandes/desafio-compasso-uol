import { Container } from './LoadingStyled'
import loading from '../../assets/loading.gif'

function Loading() {
  return <Container>
    <img src={loading} alt={"loading gif"}/>
  </Container>
}

export default Loading