import { useParams } from 'react-router-dom'
import { useRequestData } from '../hooks/useRequestData'

function SearchResultPage(){
  const params = useParams()

  const user = useRequestData({}, `/users/${params.user}`)
  console.log(user)

  // const user = useRequestData({}, "/search/users?q=adry")
  // console.log(user)

  return <main>

  </main>
}

export default SearchResultPage