import { useInput } from '../hooks/useInput'
import { useHistory } from 'react-router-dom'
import { goToSearchPage } from '../routes/coordinator'

function HomePage() {
  const history = useHistory()
  const [value, handleInput] = useInput("")

  return <main>
    <h1>Busca por perfis no gitHub</h1>
    <input
      placeholder={"Nome do usuário"}
      value={value}
      onChange={handleInput}
    />
    <button onClick={() => goToSearchPage(history, value)}>Pesquisa</button>
  </main>
}

export default HomePage