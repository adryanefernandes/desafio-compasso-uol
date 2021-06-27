import { useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import UserRepositories from '../../components/UserRepositories'
import UserStarred from '../../components/userStarred/UserStarred'
import { Main, CardUser, CardBody, Bio, ButtonGroup, Infos } from './DetailsUserPageStyled'
import { Button } from 'reactstrap';
import { useState } from 'react'

function DetailsUserPage() {
  const params = useParams()
  const [page, setPage] = useState('recent events')

  const user = useRequestData({}, `/users/${params.user}`)
  const starred = useRequestData({}, `/users/${params.user}/starred`)

  // Colocar eventos recentes: /users/adryanefernandes/events
  const seletedButton = (selectedPage) => {
    if (page === 'recent events') {
      return <div> Eventos recentes </div>
    } else if (page === 'starred') {
      return <UserStarred
        userName={params.user}
      />
    } else if (page === 'repos') {
      return <UserRepositories />
    }

  }

  return <Main>
    <CardUser>
      <img src={user?.avatar_url} alt={"user avatar"} />
      <CardBody>
        <h2>{user?.name}</h2>
        <Bio>{user?.bio}</Bio>
        <p>Localidade: {user?.location}</p>
        <p>User: {user?.login}</p>
        <p>Seguidores: {user?.followers}</p>
        <p>Seguindo: {user?.following}</p>
        <p>Estrelou: {starred?.length}</p>
        <p>Repositórioss: {user?.public_repos}</p>
      </CardBody>

    </CardUser>
    <ButtonGroup>
      <Button onClick={() => setPage("recent events")}>Eventos Recentes</Button>
      <Button onClick={() => setPage("starred")}>Estrelas dadas</Button>
      <Button onClick={() => setPage("repos")}>Repositórios</Button>
    </ButtonGroup>

    <Infos>
      {seletedButton()}
    </Infos>
  </Main>
}

export default DetailsUserPage