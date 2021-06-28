import { useRequestData } from '../../hooks/useRequestData'
import CardRepository from './cardRepositories/CardRopositories'
import { ContainerRepositories } from './UserRepositoriesStyled'


function UserRepositories(props) {
  const repos = useRequestData({}, `/users/${props.userName}/repos`)

  const reposList = repos[0] && repos.map((repo) => {
    return <CardRepository
      key={repo.id}
      repoName={repo.name}
      userName={props.userName}
    />
  })

  return <ContainerRepositories>
    {reposList}
  </ContainerRepositories>
}

export default UserRepositories