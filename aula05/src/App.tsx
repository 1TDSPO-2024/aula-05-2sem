import Cabecalho from "./components/Cabecalho/Cabecalho"

function App() {

  const pagina: string = "Página Inicial"
  const nrpagina: number = 2
  const status = "loading"
  const aviso = () => alert(pagina)

  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrpagina} statusProps={status} avisoProps={aviso}>
        <ul>
          <li><a href="">aluno-1</a></li>
          <li><a href="">aluno-2</a></li>
          <li><a href="">aluno-3</a></li>
          <li><a href="">aluno-4</a></li>
          <li><a href="">aluno-5</a></li>
          <li><a href="">aluno-6</a></li>
        </ul>
      </Cabecalho>

    </div>
  )

}

export default App
