import { MatFormFieldModule } from '@angular/material/form-field';
import { ReservaService } from './../reserva.service';
import { Reserva }  from './../reserva.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Local } from '../../local/local.model';
import { Leitor } from '../../leitor/leitor.model';
import { Item }  from '../../item/item.model';

@Component({
  selector: 'app-reserva-create',
  templateUrl: './reserva-create.component.html',
  styleUrls: ['./reserva-create.component.scss'],
  providers: [ReservaService]
})

export class ReservaCreateComponent implements OnInit {
reserva: Reserva=new Reserva(0,0,"",0,0,new Date(),new Date)
exportaItem : Item = { nome: '', tipoItem: '', numExemplar: ''};

  Locais: Local[] = [{
    codLocal: 0,
    descricao: ''
  }];

  item: Item[] = []

  Leitores: Leitor[] = [{
    codLeitor: 0,
    nome: '',
    sexo:'',
    dataNascimento: new Date(),
    cpf:'',
    rg:'',
    email:'',
    telefone:'',
    celular:'',
    enderecoRua:'',
    enderecoBairro:'',
    enderecoCidade:'',
    enderecoNumero:'',
    cep:'',
    uf:'',
  }];

  Itens: Item[] = [
    {
    codItem: 0,
    nome: "",
    tipoItem:"",
    numExemplar:"",
    volume:"",
    edicao:"",
    idioma:"",
    status:"",
    codAutor:0,
    codEditora:0,
    codLocal:0,
    codSecao:0,
  }
];

  reservas: Reserva[]=[{
    codReserva:0,
    codItem: 0,
    situacao:"",
    codLocal:0,
    codLeitor:0,
    dataReserva:new Date(),
    prazoReserva:new Date()
  }]

  isValidItem: boolean;

  constructor(public reservaService: ReservaService,
    private router: Router, public route: ActivatedRoute
    ) { 

      this.reservaService.getReservas().subscribe(data => this.reservas = data)
    }
    
  ngOnInit(): void {
    // const codItem = this.route.snapshot.paramMap.get("codItem");
    // this.reservaService.readItemById(codItem).subscribe((item) => {
    //   this.item = item;
    this.reservaService.getItens().subscribe((data:any)=>{
      this.Itens=data;
    });
    this.reservaService.getLeitores().subscribe((data:any)=>{
      this.Leitores=data;
    });
    this.reservaService.getLocais().subscribe((data:any)=>{
      this.Locais=data;
    });
  }

  loadItem(){
          this.reservaService.readItemById(Number(this.reserva.codItem))
    .subscribe(
      {
        next: data => {
          this.exportaItem = data;
          this.isValidItem = true;
          console.log(data);
        },
        error: (error) => {
          console.log(error);
          this.exportaItem = { nome: '', tipoItem: '', numExemplar: '' }
          this.isValidItem = false;
        }
      }
    )
  }

  codReserva:number=0;
  codItem:number=0;
  situacao:string="";
  codLocal:number=0;
  codLeitor:number=0;
  dataReserva:Date=new Date();
  prazoReserva:Date=new Date();

  public hide:boolean=true;
  displayedColumns: string[] = ['codItem', 'situacao', 'codLocal', 'codLeitor', 'dataReserva', 'prazoReserva'];
  dataSource:Reserva[] = [];

  createReserva() {
      let reserva:Reserva = new Reserva(this.codReserva, this.codItem,this.situacao, this.codLocal, this.codLeitor, this.dataReserva, this.prazoReserva)
      let newDataSource:Reserva[]=[];
      this.dataSource.forEach(x=>newDataSource.push(x));
      newDataSource.push(reserva);
      this.dataSource=newDataSource;
      this.reservaService.createReserva(this.reserva).subscribe(() => {
      this.reservaService.showMessage('Reserva realizada!')
      this.router.navigate(['/reserva'])
      })
  } 

  cancel(): void{
    this.router.navigate(['/reserva'])
  }
}
