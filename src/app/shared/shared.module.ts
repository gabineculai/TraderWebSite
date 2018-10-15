import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './alert-message.component';
import { AlertMessageTypesService } from './message-type/alert-message-types.service';

@NgModule({
  declarations: [ AlertMessageComponent ],
  imports: [
    CommonModule
  ],
  exports: [ AlertMessageComponent ],
  providers: [ AlertMessageTypesService ]
})
export class SharedModule { }
