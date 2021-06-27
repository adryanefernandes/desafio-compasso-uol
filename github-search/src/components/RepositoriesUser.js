import { useRequestData } from '../hooks/useRequestData'
import CardRepository from './CardRopository'


function RepositoriesUser(props) {
  const repos = useRequestData({}, `/users/${props.userName}/repos`)

  const reposList = repos[0] && repos.map((repo) => {
    return <CardRepository 
      key={repo.id}
      repoName={repo.name}
      userName={props.userName}
    />
  })

  return <div>
    {reposList}
  </div>
}

export default RepositoriesUser