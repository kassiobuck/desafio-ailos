import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Masks } from 'src/app/shared/utils/masks/masks.utils';
import { UtilValidators } from 'src/app/shared/utils/validators/validators.utils';
import { SearchUserService } from '../../services/search-user.service';
import { Cooperado } from '../../types/cooperado.type';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  steps = ['Início', 'Documentos', 'Dados Cadastrais', 'Admissão'];
  stepIndex = 0;

  cpfMask = Masks.CPF;
  novoCooperado: Cooperado | null = null;
  searchLoading = false;
  disableSearchBtn = false;

  form = new FormGroup({
    'cpf': new FormControl('a', [Validators.required, UtilValidators.cpf])
  })

  constructor(private searchUserService: SearchUserService) { }

  ngOnInit(): void {
    this.form.controls.cpf.valueChanges
      .pipe(
        filter(v => v?.length === 11),
        distinctUntilChanged()
      )
      .subscribe(((cpf) => this.setBtnState(cpf as string)))
  }

  setBtnState(cpf: string) {
    if (this.novoCooperado && this.novoCooperado.cpf === cpf) {
      this.disableSearchBtn = true;
    } else {
      this.disableSearchBtn = false;
    }
  }

  async searchUser() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.searchLoading = true;
    const cpf: string = this.form.value.cpf as string;
    try {
      this.novoCooperado = await this.searchUserService.searchByCpf(cpf);
      this.setBtnState(cpf);
    } catch (error) {
      this.novoCooperado = null;
      alert('Erro ao buscar cooperado...');
    }
    this.searchLoading = false;
  }

}
