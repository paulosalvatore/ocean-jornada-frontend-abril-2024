import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [itens, setItens] = useState([])

  const apiUrl = 'https://rickandmortyapi.com/api/character/'

  useEffect(function () {
    async function carregarDados() {
      const response = await fetch(apiUrl)

      const data = await response.json()

      const results = data.results
      setItens(results)
    }

    carregarDados()
  }, [])

  return (
    <>
      <div className="cards">
        {itens.map(function (elemento) {
          return <Card item={elemento} key={`card_${elemento.id}`} />
        })}
      </div>
    </>
  )
}

export default App
