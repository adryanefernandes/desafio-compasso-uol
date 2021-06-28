import { useRequestData } from '../../hooks/useRequestData'
import { goToDetailsUserPage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import {
  CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import { Card } from './CardProfileStyles'

function CardProfile(props) {
  const history = useHistory()

  const user = useRequestData({}, `/users/${props.user}`)

  return <Card onClick={() => goToDetailsUserPage(history, user.login)}>
    <CardImg top width="100%" src={user?.avatar_url} alt={"user avatar"} />
    <CardBody>
      <CardTitle tag="h5">{user?.login}</CardTitle>
      <CardText>{user?.bio}</CardText>
    </CardBody>

  </Card>
}

export default CardProfile