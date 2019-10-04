import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    ModalComponent
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  entryComponents: [ModalComponent],
  providers: []
})
export class SharedModule { }
