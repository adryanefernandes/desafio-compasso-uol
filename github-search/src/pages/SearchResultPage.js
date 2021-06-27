import { useParams } from 'react-router-dom'
import CardProfile from '../components/CardProfile'
import { useRequestData } from '../hooks/useRequestData'

function SearchResultPage() {
  const params = useParams()

  const searchResult = useRequestData({}, `/search/users?q=${params.user}`)

  const usersList = searchResult.items && searchResult.items.map((user) => {
    return <CardProfile
      user={user.login}
    />
  })

  return <main>
    <p>Resultados: {searchResult?.total_count}</p>
    {usersList}
  </main>
}

export default SearchResultPage