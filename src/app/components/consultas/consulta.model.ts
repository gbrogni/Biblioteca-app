export class Consulta{
    codItem?:number;
    nomeAutor?:string;
    nomeEditora?:string;
    descricaoLocal?:string;
    descricaoSecao?:string;
    situacao:string;
    tipoItem?:string;
    nomeItem?:string;
    numExemplar?:string;
    
    constructor(codItem:number, nomeAutor:string, nomeEditora:string, descricaoLocal:string, descricaoSecao:string, situacao:string, tipoItem:string, nomeItem:string, numExemplar:string){
        this.codItem=codItem;
        this.nomeAutor=nomeAutor;
        this.nomeEditora=nomeEditora;
        this.descricaoLocal=descricaoLocal;
        this.descricaoSecao=descricaoSecao;
        this.situacao=situacao;
        this.tipoItem=tipoItem;
        this.nomeItem=nomeItem;
        this.numExemplar=numExemplar;
    }
}