import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = "Professores";

  public professores = [
    {nome: 'anderson'},
    {nome: 'Vasco'},
    {nome: 'Jeff'},
    {nome: 'Guilherme'},
    {nome: 'Leandro'},
    {nome: 'Renata'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
