import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovaAdmissaoRoutingModule } from './nova-admissao-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { StepByStepModule } from 'src/app/shared/components/step-by-step/step-by-step.module';
import { NovaAdmissaoComponent } from './nova-admissao.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchUserService } from './services/search-user.service';
import { InfoCooperadoComponent } from './components/info-cooperado/info-cooperado.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  providers: [SearchUserService],
  declarations: [
    InicioComponent,
    NovaAdmissaoComponent,
    InfoCooperadoComponent
  ],
  imports: [
    CommonModule,
    NovaAdmissaoRoutingModule,
    StepByStepModule,
    NgxMaskModule.forRoot(maskConfig),
    ReactiveFormsModule
  ]
})
export class NovaAdmissaoModule { }
