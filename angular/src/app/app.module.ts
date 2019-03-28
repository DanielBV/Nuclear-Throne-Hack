import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GameFormComponent } from './game-form/game-form.component';
import { WeaponSelectorModal } from './weapon-selector/weapon-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MutationSelectorComponent } from './mutation-selector/mutation-selector.component';
import {HttpClientModule} from '@angular/common/http';
import { ConfirmationBoxComponent } from './confirmation-box/confirmation-box.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFormComponent,
    WeaponSelectorModal,
    MutationSelectorComponent,
    ConfirmationBoxComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  entryComponents: [WeaponSelectorModal,MutationSelectorComponent,ConfirmationBoxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
