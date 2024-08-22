import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App() {
  const titulo: string = "Minha página";

  return (
    <div>
      <h1>Componente APP</h1>
      <Cabecalho  tituloProps={titulo}/>
    </div>
  );
}
