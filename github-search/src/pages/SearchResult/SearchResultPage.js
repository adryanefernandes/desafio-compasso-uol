import { useHistory, useParams } from 'react-router-dom'
import CardProfile from '../../components/cardProfile/CardProfile'
import Header from '../../components/header/Header'
import { useRequestData } from '../../hooks/useRequestData'
import { goToDetailsUserPage } from '../../routes/coordinator'
import { Main, Results, Pagination } from './SearchResultPageStyled'
import { PaginationItem, PaginationLink } from './SearchResultPageStyled';
import { useState } from 'react'

function SearchResultPage() {
  const history = useHistory()
  const params = useParams()
  const [page, setPage] = useState(Number(params.page))

  const searchResult = useRequestData({}, `/search/users?q=${params.user}&page=${params.page}`)

  if (searchResult && searchResult.total_count === 1) {
    goToDetailsUserPage(history, params.user)
  }

  if (page < 1) {
    setPage(1)
  }

  const usersList = searchResult.items && searchResult.items.map((user) => {
    return <CardProfile
      user={user.login}
    />
  })

  return <>
    <Header page={'search'} />
    <Main>
      <p>Resultados:<span> {searchResult?.total_count}</span></p>
      <Results>
        {usersList}
      </Results>
    </Main>

    <Pagination>
      <PaginationItem>
        <PaginationLink previous href={`http://localhost:3000/user/search/${params.user}/${page - 1}`} >
          Previous
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`http://localhost:3000/user/search/${params.user}/${page}`}>
          {page}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`http://localhost:3000/user/search/${params.user}/${page + 1}`}>
          {page + 1}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={`http://localhost:3000/user/search/${params.user}/${page + 2}`}>
          {page + 2}
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href={`http://localhost:3000/user/search/${params.user}/${page + 1}`} >
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  </>
}

export default SearchResultPage