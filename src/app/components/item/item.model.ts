export class Item{
    codItem?:number;
    nome:string;
    tipoItem:string;
    numExemplar:string;
    volume:string;
    edicao:string;
    idioma:string;
    codAutor:number;
    codEditora:number;
    codLocal:number;
    codSecao:number;
    
    constructor(codItem:number,nome:string, tipoItem:string, numExemplar:string, volume:string, edicao:string, 
        idioma:string, codAutor:number, codEditora:number, codLocal:number, codSecao:number){
        this.codItem=codItem;
        this.nome=nome;
        this.tipoItem=tipoItem;
        this.numExemplar=numExemplar;
        this.volume=volume;
        this.edicao=edicao;
        this.idioma=idioma;
        this.codAutor=codAutor;
        this.codEditora=codEditora;
        this.codLocal=codLocal;
        this.codSecao=codSecao;
    }
}

export class Autor{
    codAutor?:number;
    nomeAutor:string;
    descricao:string;
    
    constructor(codAutor:number,nomeAutor:string,descricao:string){
        this.codAutor=codAutor;
        this.nomeAutor=nomeAutor;
        this.descricao=descricao;

    }
}
