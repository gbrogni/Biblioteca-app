export class Reserva{
    codReserva?:number;
    codItem?:number;
    situacao:string;
    codLocal?:number;
    codLeitor?:number;
    dataReserva:Date;
    prazoReserva:Date;
    
    constructor(codReserva:number, codItem:number,situacao:string, codLocal:number, codLeitor:number, dataReserva:Date, prazoReserva:Date){
        this.codReserva=codReserva;
        this.codItem=codItem;
        this.situacao=situacao;
        this.codLocal=codLocal;
        this.codLeitor=codLeitor;
        this.dataReserva=dataReserva;
        this.prazoReserva=prazoReserva;
    }
}