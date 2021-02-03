import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  @Input() valorInicial: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
