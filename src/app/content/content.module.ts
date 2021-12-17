import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { AddSmtComponent } from './add-smt/add-smt.component';
import { SmtApiService } from './add-smt/services/smt-api.service';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AddSmtFacade } from './add-smt/add-smt.facade';
import { FireApiService } from '../services/fire-api.service';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterListItemComponent } from './character-list/character-list-item/character-list-item.component';
import { AddSmtStorage } from './add-smt/add-smt.storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContentRoutingModule,
    SharedModule,
    TranslateModule,

  ],
  declarations: [
    ContentComponent,
    AddSmtComponent,
    CharacterDetailsComponent,
    CharacterListComponent,
    CharacterListItemComponent
  ],
  providers: [SmtApiService, AddSmtFacade, FireApiService, AddSmtStorage],
})
export class ContentModule {}