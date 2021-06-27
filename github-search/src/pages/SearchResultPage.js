import { useParams } from 'react-router-dom'
import Card from '../components/Card'
import { useRequestData } from '../hooks/useRequestData'

function SearchResultPage() {
  const params = useParams()

  const searchResult = useRequestData({}, `/search/users?q=${params.user}`)

  const usersList = searchResult.items && searchResult.items.map((user) => {
    return <Card
      user={user.login}
    />
  })

  return <main>
    <p>Resultados: {searchResult?.total_count}</p>
    {usersList}
  </main>
}

export default SearchResultPage