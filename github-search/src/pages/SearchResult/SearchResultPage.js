import { useHistory, useParams } from 'react-router-dom'
import CardProfile from '../../components/cardProfile/CardProfile'
import Header from '../../components/header/Header'
import { useRequestData } from '../../hooks/useRequestData'
import { goToDetailsUserPage } from '../../routes/coordinator'
import { Main, Results } from './SearchResultPageStyled'


function SearchResultPage() {
  const history = useHistory()
  const params = useParams()

  const searchResult = useRequestData({}, `/search/users?q=${params.user}`)
  console.log(searchResult)

  if (searchResult && searchResult.total_count === 1) {
    goToDetailsUserPage(history, params.user)
  }

  const usersList = searchResult.items && searchResult.items.map((user) => {
    return <CardProfile
      user={user.login}
    />
  })

  return <>
    <Header page={'search'}/>
    <Main>
      <p>Resultados:<span> {searchResult?.total_count}</span></p>
      <Results>
        {usersList}
      </Results>
    </Main>
  </>
}

export default SearchResultPage