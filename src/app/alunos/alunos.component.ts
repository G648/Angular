import { Component } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent {

  titulo = 'Alunos';

  public alunos =[
    { nome: 'Ruth'},
    { nome: 'Josephina'},
    { nome: 'Betty'},
    { nome: 'Carolina'},
    { nome: 'Julia'},
    { nome: 'Marcelo'},
  ];
}
