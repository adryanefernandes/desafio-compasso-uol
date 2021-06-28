import { useRequestData } from '../../hooks/useRequestData'
import CardStarred from './cardStarred/CardStarred'
import { ContainerStarred } from './UserStarredStyled'

function UserStarred(props) {
  const starred = useRequestData({}, `/users/${props.userName}/starred`)

  const starredList = starred[0] && starred.map((repo) => {
    return <CardStarred
      name={repo.name}
      description={repo.description}
      lenguage={repo.lenguage}
      nameCreator={repo.owner.login}
    />
  })

  return <ContainerStarred>
    {starredList}
  </ContainerStarred>
}

export default UserStarred