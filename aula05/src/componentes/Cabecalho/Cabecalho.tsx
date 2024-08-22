//import { Cabecalho1Props, Cabecalho2Props } from "../../types";

//Usando type
type Cabecalho1Props = {
    paginaProps: string;
    nrPaginaProps: number | string;
    children: React.ReactNode;
}

//Usando interface
interface Cabecalho2Props {
    statusProps: "loading" | "deployed" | "xuxu";
    avisoProps: Function;
}

export default function Cabecalho(props:Cabecalho1Props & Cabecalho2Props){
    
    document.title = props.statusProps + " - " + props.nrPaginaProps;

    /*
    const aluno = {
        nome: "Nuno",
        idade: 13,
        rm: 443331
    }

    const{nome,idade,rm} = aluno;
    */

    return(
      <header>
        <h1>{props.statusProps + " - " + props.nrPaginaProps}</h1>
        <div>
            <button onClick={()=>props.avisoProps()}>
                Aviso do Pai
            </button>
        </div>
        <div>
            {props.children}
        </div>
        {/* 
        <div>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>RM: {rm}</p>
        </div> 
        */}
      </header>
    )
}