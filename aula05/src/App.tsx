import Cabecalho from "./components/Cabecalho/Cabecalho";

const pagina:string = "Página Inicial";
const nrPagina:number = 2;
const status = "loading"


const aviso = () => {
    alert(pagina)
}


export default function App() {
    return (
        <div>
            <Cabecalho 
                paginaProps={pagina} 
                avisoProps={aviso} 
                nrPaginaProps={nrPagina} 
                statusProps={status}>
                <ul>
                    <li><a href="#">Aluno-1</a></li>
                    <li><a href="#">Aluno-2</a></li>
                    <li><a href="#">Aluno-3</a></li>
                    <li><a href="#">Aluno-4</a></li>
                    <li><a href="#">Aluno-5</a></li>
                    <li><a href="#">Aluno-6</a></li>
                </ul>
            </Cabecalho>
        </div>
    )
}