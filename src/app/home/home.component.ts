import { Component, OnInit } from '@angular/core';
import { Alunos } from '../model/Alunos';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  valor: number;
  exibeTabela: boolean;

  listaAlunos: Alunos[] = [
    {nome: 'Daniela', idade: 41, email: 'dani@email', curso: 'Nutrição'},
    {nome: 'Wagner', idade: 41, email: 'wagner@email', curso: 'Ciencias da Computação'},
    {nome: 'Lorenzo', idade: 7, email: 'lorenzo@email', curso: '2 serie'},
    {nome: 'Lorena', idade: 41, email: 'lorena@email', curso: 'Creche'},
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  constructor() { }

  ngOnInit(): void {
    this.valor = 5;
    this.exibeTabela = false;
  }

  mudarValor(): void {
    this.valor++;
  }

  reiniciarValor(): void {
    this.valor = 0;
  }

  exibirTabela(): void {
    this.exibeTabela = !this.exibeTabela;
  }
}
