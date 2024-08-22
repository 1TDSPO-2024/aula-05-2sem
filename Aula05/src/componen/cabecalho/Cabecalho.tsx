export default function Cabecalho({tituloProps, avisoProps}: {tituloProps: string, avisoProps: Function}){

    document.title = tituloProps

    const aluno= {
        nome: "Nubank",
        idade: 105,
        rm: "45216"
    }

    const{nome,idade,rm} = aluno;

    return(
      <header>
        <h1>{tituloProps}</h1>
        <div>
            <button onClick={()=>avisoProps()}>Aviso do Pai</button>
        </div>
        <div>
            <p>Nome:{nome}</p>
            <p>Idade:{idade}</p>
            <p>Rm:{rm}</p>
        </div>
      </header>
    );
}