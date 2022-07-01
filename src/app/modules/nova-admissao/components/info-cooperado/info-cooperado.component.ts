import { Component, Input, OnInit } from '@angular/core';
import { Conta } from '../../types/Conta.type';
import { Cooperado } from '../../types/cooperado.type';

@Component({
  selector: 'app-info-cooperado',
  templateUrl: './info-cooperado.component.html',
  styleUrls: ['./info-cooperado.component.scss']
})
export class InfoCooperadoComponent implements OnInit {

  @Input() cooperado: Cooperado | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  contaTrackBy = (index:number, conta:Conta) => conta.numero;

}
