import { Link } from "react-router-dom";

export default function Create() {
  return (
    <>
      <Link to="/">Home</Link>
      <div>
        <form>
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
