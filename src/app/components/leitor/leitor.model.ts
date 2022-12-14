export class Leitor{
    codLeitor?:number;
    nome:string;
    sexo:string;
    dataNascimento:Date;
    cpf:string;
    rg:string;
    email:string;
    telefone:string;
    celular:string;
    enderecoRua:string;
    enderecoBairro:string;
    enderecoCidade:string;
    enderecoNumero:string;
    cep:string;
    uf:string;
    
    constructor(codLeitor:number,nome:string,sexo:string,dataNascimento:Date, cpf:string, rg:string,email:string,telefone:string,celular:string,
enderecoRua:string,enderecoBairro:string,enderecoCidade:string,enderecoNumero:string,cep:string, uf:string){
        this.codLeitor=codLeitor;
        this.nome=nome;
        this.sexo=sexo;
        this.dataNascimento=dataNascimento;
        this.cpf=cpf;
        this.rg=rg;
        this.email=email;
        this.telefone=telefone;
        this.celular=celular;
        this.enderecoRua=enderecoRua;
        this.enderecoBairro=enderecoBairro;
        this.enderecoCidade=enderecoCidade;
        this.enderecoNumero=enderecoNumero;
        this.cep=cep;
        this.uf=uf;
    }
}