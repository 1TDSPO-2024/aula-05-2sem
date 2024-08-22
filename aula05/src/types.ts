//Usando type
export type Cabecalho1Props = {
    paginaProps: string;
    nrPaginaProps: number | string;
    children: React.ReactNode;
}

//Usando interface
export interface Cabecalho2Props {
    statusProps: "loading" | "deployed" | "xuxu";
    avisoProps: Function;
}