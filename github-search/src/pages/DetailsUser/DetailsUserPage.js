import { useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import UserRepositories from '../../components/UserRepositories'
import UserStarred from '../../components/UserStarred'

function DetailsUserPage() {
  const params = useParams()

  const user = useRequestData({}, `/users/${params.user}`)
  // Colocar eventos recentes: /users/adryanefernandes/events

  return <main>
    <div>
      <img src={user?.avatar_url} alt={"user avatar"} />
      <h2>{user?.name}</h2>
      {/* <p>{user?.bio}</p>
      <p>{user?.location}</p>
      <p>{user?.followers}</p>
      <p>{user?.following}</p>
      <p>{user?.location}</p>
      <p>{user?.login}</p>
      <p>{user?.public_gists}</p>
      <p>{user?.public_repos}</p> */}
      <UserRepositories
        userName={params.user}
      />
      <UserStarred
        userName={params.user}
      />
    </div>

  </main>
}

export default DetailsUserPage