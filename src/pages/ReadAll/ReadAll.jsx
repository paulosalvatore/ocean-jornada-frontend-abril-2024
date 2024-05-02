import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'

export default function ReadAll() {
    const [itens, setItens] = useState([])
  
    const apiUrl = 'https://ocean-jornada-backend-abril-2024.onrender.com/item'
  
    useEffect(function () {
      async function carregarDados() {
        const response = await fetch(apiUrl)
  
        const data = await response.json()
  
        setItens(data)
      }
  
      carregarDados()
    }, [])
  
    return (
      <>
        <div className="cards">
          {itens.map(function (elemento) {
            return <Card item={elemento} key={`card_${elemento._id}`} />
          })}
        </div>
      </>
    )
}
