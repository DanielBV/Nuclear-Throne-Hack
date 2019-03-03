import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GameFormComponent } from './game-form/game-form.component';
import { WeaponSelectorModal } from './weapon-selector/weapon-selector.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GameFormComponent,
    WeaponSelectorModal
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  entryComponents: [WeaponSelectorModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
