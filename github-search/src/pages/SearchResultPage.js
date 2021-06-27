import { useHistory, useParams } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'
import { goToDetailsUserPage } from '../routes/coordinator'

function SearchResultPage() {
  const params = useParams()
  const history = useHistory()

  const searchResult = useRequestData({}, `/search/users?q=${params.user}`)

  const usersList = searchResult.items && searchResult.items.map((user) => {
    return <div onClick={() => goToDetailsUserPage(history, user.login)}>
      <img src={user.avatar_url} alt={"user avatar"} />
      <p>name: {user.login}</p>
    </div>
  })

  
  return <main>
    {usersList}
  </main>
}

export default SearchResultPage