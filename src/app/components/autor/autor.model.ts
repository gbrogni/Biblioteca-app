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

export interface AutorI{
    codAutor?:number;
    nomeAutor:string;
    descricao:string;
}