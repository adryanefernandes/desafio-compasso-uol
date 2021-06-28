import { useRequestData } from '../../../hooks/useRequestData'
import { Card, Name, Update, CardBody } from './CardRepositoriesStyled'

function CardRepository(props) {
  const repository = useRequestData({}, `/repos/${props.userName}/${props.repoName}`)

  const updated_date = repository.updated_at && repository.updated_at.split("T")

  return <Card>
    <Name>{props.repoName}</Name>
    <Update>autalizado em {updated_date && updated_date[0]}</Update>

    <CardBody>
      <p>Estrelas: {repository?.stargazers_count}</p>
      <p>{repository?.language}</p>
    </CardBody>

  </Card>
}

export default CardRepository