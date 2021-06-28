import notFound from '../../assets/notFound.jpg'
import { Image } from './ErrorPageStyled'

function ErrorPage(params) {
  return <div>
    <Image src={notFound} alt={"astronaut with '404 page not found, please look at another universe'"} />
  </div>
}

export default ErrorPage