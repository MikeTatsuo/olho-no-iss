import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'where',
    pathMatch: 'full'
  },
  { path: 'when', loadChildren: './when/when.module#WhenPageModule' },
  { path: 'where', loadChildren: './where/where.module#WherePageModule' },
  { path: 'who', loadChildren: './who/who.module#WhoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
