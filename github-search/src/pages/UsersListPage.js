import { useRequestData } from '../hooks/useRequestData'

function UsersListPage(){
  const user = useRequestData({}, "/users/adryanefernandes")

  return <div>
    UsersListPage
    {user?.id}
  </div>
}

export default UsersListPage