import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: 'iPhone 11', descricao: 'Celular médio', esgotado: false },
    { id: 2, nome: 'iPhone 12', descricao: 'Celular grande', esgotado: false },
    { id: 2, nome: 'iPhone 13', descricao: 'Celular muito grande', esgotado: true },
  ];
}
