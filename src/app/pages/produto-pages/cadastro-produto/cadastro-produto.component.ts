import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {
  public nome?: string;
  public preco?: number;
  public quantidade?: number;
  public fornecedor?: string;

  public clientes = [];

  constructor() {}

  ngOnInit(): void {}

  public cadastrar(): void {
    if(
      this.nome && this.preco && this.quantidade
    ){
      this.clientes.unshift({
        nome: this.nome,
        preco: this.preco,
        quantidade: this.quantidade,
      });
    }
  }
}
