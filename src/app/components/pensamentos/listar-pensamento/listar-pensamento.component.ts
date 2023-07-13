import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Testing componetsTesting componets2Testing componets2Testing compTesting componets2Testing componets2Testing componets2Testing ',
      autoria: 'Nay',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2Testing componets2',
      autoria: 'Nay',
      modelo: 'modelo3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
