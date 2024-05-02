import { Link } from "react-router-dom";

export default function Create() {
  function onSubmit(event) {
    event.preventDefault()

    const name = event.target.name.value
    const image = event.target.image.value

    const data = {
      name,
      image
    }

    const json = JSON.stringify(data)

    console.log(data, json)

    // TODO: Implementar requisição na API, enviando o JSON
  }

  return (
    <>
      <Link to="/">Home</Link>
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" placeholder="Digite o nome" />
          <br />

          <label htmlFor="image">Imagem:</label>
          <input type="text" id="image" name="image" placeholder="Digite a URL da imagem" />
          <br />

          <input type="submit" value="Criar" />
        </form>
      </div>
    </>
  )
}
