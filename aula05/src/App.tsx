import Cabecalho from "./components/Cabecalho/Cabecalho"

function App() {

  const titulo: string = "Minha página"
  const numero: number = 69
  const listaName: string[] = ["yuri", "garro"]
  const aluno = {
    nome: "Felipe",
    idade: 18,
    vivo: true
  }
  return (
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} />
    </div>
  )

}

export default App
