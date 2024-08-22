export type CabecalhoProps = {
    paginaProps: string;
    nrPaginaProps: number | string;
    statusProps: "loading" | "deploymed";
    avisoProps: Function;
    children: React.ReactNode;

}

export interface Cabecalho2Props {
    statusProps: "loading" | "deploymed";
    avisoProps: Function;
}