import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent {
  nome = 'Tiago';
  dataNascimento = '1998-06-15';
  urlImagem = '../../assets/tiago.jpg';

  mostrarDataNascimento() {
    alert(`A data de nascimento do Tiago é: ${this.dataNascimento}`);
  }
}