export type CabecalhoProps1 = {
    paginaProps: string;
    nrPaginaProps: number | string;
    children: React.ReactNode;
};
export interface CabecalhoProps2 {
    statusProps: 'loading'|'deployed';
    avisoProps: Function;
};
