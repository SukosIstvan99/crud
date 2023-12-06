import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPortfolioComponent } from './add-edit-portfolio.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';



@NgModule({
  declarations: [
    AddEditPortfolioComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
  ],
  exports: [
    AddEditPortfolioComponent
  ]
})
export class AddEditPortfolioModule { }
