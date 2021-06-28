import { useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import UserRepositories from '../../components/userRepositories/UserRepositories'
import UserStarred from '../../components/userStarred/UserStarred'
import Header from '../../components/header/Header'
import { Main, CardUser, CardBody, Bio, ButtonGroup, Infos } from './DetailsUserPageStyled'
import { Button } from 'reactstrap';
import { useState } from 'react'

function DetailsUserPage() {
  const params = useParams()
  const [page, setPage] = useState('starred')

  const user = useRequestData({}, `/users/${params.user}`)
  const starred = useRequestData({}, `/users/${params.user}/starred`)

  const seletedButton = () => {
    if (page === 'starred') {
      return <UserStarred
        userName={params.user}
      />
    } else if (page === 'repos') {
      return <UserRepositories 
        userName={params.user}
      />
    }
  }

  return<> 
  <Header />
  <Main page={'details'}>
    <CardUser>
      <img src={user?.avatar_url} alt={"user avatar"} />
      <CardBody>
        <h2>{user?.name}</h2>
        <Bio>{user?.bio}</Bio>
        <p>Localidade: {user?.location}</p>
        <p>Usuário: {user?.login}</p>
        <p>Seguidores: {user?.followers}</p>
        <p>Seguindo: {user?.following}</p>
        <p>Estrelas dadas: {starred?.length}</p>
        <p>Repositórios: {user?.public_repos}</p>
      </CardBody>

    </CardUser>
    <ButtonGroup>
      <Button  onClick={() => setPage("starred")}>Estrelas dadas</Button>
      <Button  onClick={() => setPage("repos")}>Repositórios</Button>
    </ButtonGroup>

    <Infos>
      {seletedButton()}
    </Infos>
  </Main>
  </>
}

export default DetailsUserPage