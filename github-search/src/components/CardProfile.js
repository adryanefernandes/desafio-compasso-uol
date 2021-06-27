import { useRequestData } from '../hooks/useRequestData'
import { goToDetailsUserPage } from '../routes/coordinator'
import { useHistory } from 'react-router-dom'

function CardProfile(props) {
  const history = useHistory()

  const user = useRequestData({}, `/users/${props.user}`)
  console.log(user)


  return <div onClick={() => goToDetailsUserPage(history, user.login)}>
    <img src={user?.avatar_url} alt={"user avatar"} />
    <p>name: {user?.login}</p>
    <p>bio: {user?.bio}</p>
  </div>
}

export default CardProfile