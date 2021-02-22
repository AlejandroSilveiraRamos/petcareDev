import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contrate-servico',
    loadChildren: () => import('./pages/contrate-servico/contrate-servico.module').then( m => m.ContrateServicoPageModule)
  },
  {
    path: 'seja-cuidador',
    loadChildren: () => import('./pages/seja-cuidador/seja-cuidador.module').then( m => m.SejaCuidadorPageModule)
  },
  {
    path: 'petcare',
    loadChildren: () => import('./pages/petcare/petcare.module').then( m => m.PetcarePageModule)
  },
  {
    path: 'duvidas-frequentes',
    loadChildren: () => import('./pages/duvidas-frequentes/duvidas-frequentes.module').then( m => m.DuvidasFrequentesPageModule)
  },
  {
    path: 'seja-heroi',
    loadChildren: () => import('./pages/seja-heroi/seja-heroi.module').then( m => m.SejaHeroiPageModule)
  },
  {
    path: 'tela-sts',
    loadChildren: () => import('./tela-ext/tela-sts/tela-sts.module').then( m => m.TelaStsPageModule)
  },
  {
    path: 'cad-usuario-dono',
    loadChildren: () => import('./tela-ext/cadastros/cad-usuario-dono/cad-usuario-dono.module').then( m => m.CadUsuarioDonoPageModule)
  },
  {
    path: 'cad-usuario-cuidador',
    loadChildren: () => import('./tela-ext/cadastros/cad-usuario-cuidador/cad-usuario-cuidador.module').then( m => m.CadUsuarioCuidadorPageModule)
  },
  {
    path: 'hospedagem',
    loadChildren: () => import('./tela-ext/hospedagem/hospedagem.module').then( m => m.HospedagemPageModule)
  },
  {
    path: 'hospedagem-services',
    loadChildren: () => import('./tela-ext/hospedagem-services/hospedagem-services.module').then( m => m.HospedagemServicesPageModule)
  },
  {
    path: 'passeio',
    loadChildren: () => import('./tela-ext/passeio/passeio.module').then( m => m.PasseioPageModule)
  },
  {
    path: 'viagem',
    loadChildren: () => import('./tela-ext/viagem/viagem.module').then( m => m.ViagemPageModule)
  },
  {
    path: 'home-done',
    loadChildren: () => import('./home-done/home-done.module').then( m => m.HomeDonePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./tela-ext/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'meus-pets',
    loadChildren: () => import('./tela-ext/meus-pets/meus-pets.module').then( m => m.MeusPetsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./tela-ext/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'passeio-services',
    loadChildren: () => import('./tela-ext/passeio-services/passeio-services.module').then( m => m.PasseioServicesPageModule)
  },
  {
    path: 'viagem-services',
    loadChildren: () => import('./tela-ext/viagem-services/viagem-services.module').then( m => m.ViagemServicesPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}