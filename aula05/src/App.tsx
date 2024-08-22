import Cabecalho from "./components/Cabecalho/Cabecalho";

const pagina:string = "Página Inicial";
const nrPagina:number = 2;
const status:string = "loading"


const aviso = () => {
    alert(pagina)
}


export default function App() {
    return (
        <div>
            <Cabecalho paginaProps={pagina} avisoProps={aviso} nrPaginaProps={nrPagina} statusProps={status}/>
        </div>
    )
}