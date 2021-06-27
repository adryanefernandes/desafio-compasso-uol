import { useParams } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'

function DetailsUserPage() {
  const params = useParams()

  const user = useRequestData({}, `/users/${params.user}`)
  const repos = useRequestData({}, `/users/${params.user}/repos`)
  const starred = useRequestData({}, `/users/${params.user}/starred`)
  console.log(repos)
  console.log(starred)

  return <main>
    <div>
      <img src={user?.avatar_url} alt={"user avatar"} />
      <h2>{user?.name}</h2>
      <p>{user?.bio}</p>
      <p>{user?.followers}</p>
      <p>{user?.following}</p>
      <p>{user?.location}</p>
      <p>{user?.login}</p>
      <p>{user?.public_gists}</p>
      <p>{user?.public_repos}</p>
    </div>
    <div>

    </div>
  </main>
}

export default DetailsUserPage