export class Emprestimo{
    codReserva?:number;
    dataReserva?: Date;
    prazoReserva?: Date;
    codItem?:number;
    nomeAutor?:string;
    nomeEditora?:string;
    descricaoLocal?:string;
    descricaoSecao?:string;
    tipoItem?:string;
    nomeItem?:string;
    
    constructor(codItem:number, nomeAutor:string, nomeEditora:string, descricaoLocal:string, descricaoSecao:string, dataReserva:Date, tipoItem:string, nomeItem:string, prazoReserva:Date){
        this.codItem=codItem;
        this.nomeAutor=nomeAutor;
        this.nomeEditora=nomeEditora;
        this.descricaoLocal=descricaoLocal;
        this.descricaoSecao=descricaoSecao;
        this.dataReserva=dataReserva;
        this.tipoItem=tipoItem;
        this.nomeItem=nomeItem;
        this.prazoReserva=prazoReserva;
    }
}