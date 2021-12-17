import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [CommonModule,  RouterModule, TranslateModule, SharedModule],
  exports: [HeaderComponent, NotFoundComponent],
  declarations: [HeaderComponent, NotFoundComponent],
})
export class ShellModule {};