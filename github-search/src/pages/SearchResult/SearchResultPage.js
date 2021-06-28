import { useParams } from 'react-router-dom'
import CardProfile from '../../components/cardProfile/CardProfile'
import { useRequestData } from '../../hooks/useRequestData'
import { Main, Results } from './SearchResultPageStyled'

function SearchResultPage() {
  const params = useParams()

  const searchResult = useRequestData({}, `/search/users?q=${params.user}`)

  const usersList = searchResult.items && searchResult.items.map((user) => {
    return <CardProfile
      user={user.login}
    />
  })

  return <Main>
    <Results>Resultados:<span> {searchResult?.total_count}</span></Results>
    {usersList}
  </Main>
}

export default SearchResultPage