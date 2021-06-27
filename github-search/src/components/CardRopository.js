import { useRequestData } from '../hooks/useRequestData'

function CardRepository(props) {
  const repository = useRequestData({}, `/repos/${props.userName}/${props.repoName}`)

  return <div>
    <p>{repository?.stargazers_count}</p>
    <p>{repository?.language}</p>
    <p>{repository?.updated_at}</p>
  </div>
}

export default CardRepository