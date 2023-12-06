import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment.development';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AddEditPortfolioModule } from './portfolio/add-edit-portfolio/add-edit-portfolio.module';


const firebaseConfig = {
  apiKey: "AIzaSyDW_rDJOaDFdMY59dhbxM8oY8OaEtD_0Yg",
  authDomain: "portfolio-database-26a3a.firebaseapp.com",
  projectId: "portfolio-database-26a3a",
  storageBucket: "portfolio-database-26a3a.appspot.com",
  messagingSenderId: "405337509328",
  appId: "1:405337509328:web:bc09ece60e37819259fdd5"
};




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    PortfolioModule,
    AddEditPortfolioModule,
  ],
  providers: [
    SharedService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
