import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddSmtComponent } from './add-smt/add-smt.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { ContentComponent } from './content.component';
export const routes: Route[] = [
  {
    path: '',
    component: ContentComponent,
  },
 {
  path: 'add',
   component: AddSmtComponent,
 },
 
 {
   path: 'details/:id',
    component: CharacterDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
