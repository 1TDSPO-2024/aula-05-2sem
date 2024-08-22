import Cabecalho from "./components/Cabecalho/Cabecalho";

const titulo:string = "Minha Página";
const numero:number = 2;
const listaNomes:string[] = ["Felipe", "Jose", "Miguel", "Maria"]
const aluno:object = {
    nome:"Marcelo",
    idade: 11,
    vivo: true
}


export default function App() {
    return (
        <div>
            <Cabecalho tituloProps={titulo}/>
        </div>
    )
}