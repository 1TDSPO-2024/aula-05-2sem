export default function Cabecalho({tituloProps, avisoProps}: { tituloProps:string, avisoProps: Function }){
    
    document.title = tituloProps

    const aluno = {
        nome: "Nuno",
        idade: 11,
        rm: "556303"
    }

    const{nome, idade, rm} = aluno;
    // const{nome, ...resto} = aluno;
    // para usar o resto, chama o resto.nomePropriedade

    return(
        <div>
            <h1>{tituloProps}</h1>
            <div>
                <button onClick={() => avisoProps()}>Aviso do Pai</button>
            </div>
            <div>
                <p>Nome: {nome}</p>
                <p>Idade: {idade}</p>
                <p>RM: {rm}</p>
            </div>
        </div>
    );
}