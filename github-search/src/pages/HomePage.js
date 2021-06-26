import { useInput } from '../hooks/useInput'

function HomePage() {
  const [value, handleInput] = useInput("")

  return <div>
    <h1>Busca por perfis no gitHub</h1>
    <input
      placeholder={"Nome do usuário"}
      value={value}
      onChange={handleInput}
    />
    <button onClick={"oi"}>Pesquisa</button>
  </div>
}

export default HomePage