export class Item{
    codItem?:number;
    nome?:string;
    tipoItem?:string;
    numExemplar?:string;
    volume?:string;
    edicao?:string;
    idioma?:string;
    status?:string;
    codAutor?:number;
    codEditora?:number;
    codLocal?:number;
    codSecao?:number;

    
    constructor(codItem:number,nome:string, tipoItem:string, numExemplar:string, volume:string, edicao:string, 
      idioma:string, status:string, codAutor:number, codEditora:number, codLocal:number, codSecao:number)
    {
        this.codItem=codItem;
        this.nome=nome;
        this.tipoItem=tipoItem;
        this.numExemplar=numExemplar;
        this.volume=volume;
        this.edicao=edicao;
        this.idioma=idioma;
        this.status=status;
        this.codAutor=codAutor;
        this.codEditora=codEditora;
        this.codLocal=codLocal;
        this.codSecao=codSecao;
    }
}