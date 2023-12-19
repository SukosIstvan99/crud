import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditPortfolioModule } from './add-edit-portfolio/add-edit-portfolio.module';
import { DataViewModule } from 'primeng/dataview';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    PaginatorModule,
    AddEditPortfolioModule,
    BrowserAnimationsModule,
    DataViewModule,
  ],
  exports:[
    PortfolioComponent
  ]
})
export class PortfolioModule { }
