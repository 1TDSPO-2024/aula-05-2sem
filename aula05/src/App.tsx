import Cabecalho from "./components/Cabecalho/Cabecalho";

export default function App(){
  
  const titulo: string = "Minha página";

  const aviso = ()=> alert(titulo);
  
  // const numero: number = 26;
  // const listaNomes: string[] =["Pedro", "João", "Isabela"];
  // const aluno : {nome: string; idade: number; vivo: boolean;} = {
  //   nome: "Rafael",
  //   idade: 11,
  //   vivo: true
  // }

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps ={titulo} avisoProps={aviso} />
    </div>
  );
}