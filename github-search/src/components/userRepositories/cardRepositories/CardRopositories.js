import { useRequestData } from '../../../hooks/useRequestData'
import { Card, Name, Update, CardBody } from './CardRepositoriesStyled'
import star from '../../../assets/star.png'

function CardRepository(props) {
  const repository = useRequestData({}, `/repos/${props.userName}/${props.repoName}`)

  const updated_date = repository.updated_at && repository.updated_at.split("T")

  return <Card>
    <Name>{props.repoName}</Name>
    <Update>autalizado em {updated_date && updated_date[0]}</Update>

    <CardBody>
      <p>{repository?.language}</p>
      <p><img src={star} alt={"icon star"} /> {repository?.stargazers_count}</p>
    </CardBody>

  </Card>
}

export default CardRepository