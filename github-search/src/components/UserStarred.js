import { useRequestData } from '../hooks/useRequestData'
import CardStarred from './CardStarred'

function UserStarred(props){
  const starred = useRequestData({}, `/users/${props.userName}/starred`)
  console.log(starred)

  const starredList = starred[0] && starred.map((repo) => {
    return <CardStarred 
      name={repo.name}
      description={repo.description}
      lenguage={repo.lenguage}
      nameCreator={repo.owner.login}
    />
  })


  return <div>
    {starredList}
  </div>
}

export default UserStarred