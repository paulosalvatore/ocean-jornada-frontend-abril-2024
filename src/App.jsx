import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    tags: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
  }

  const item2 = {
    name: 'Morty Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    tags: ['Status: Vivo']
  }

  const item3 = {
    name: 'Summer Smith',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    tags: ['Espécie: Humana']
  }

  const itens = [item1, item2, item3]

  return (
    <>
      <div className="cards">
        {itens.map(function (elemento) {
          return <Card item={elemento} />
        })}
      </div>
    </>
  )
}

export default App
