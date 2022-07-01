import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NovaAdmissaoComponent } from './nova-admissao.component';

const routes: Routes = [{ path: '', component: NovaAdmissaoComponent, children: [
  { path: '', component: InicioComponent }
  ] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovaAdmissaoRoutingModule { }
