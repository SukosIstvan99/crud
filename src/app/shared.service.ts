
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, deleteDoc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  constructor(private fs: Firestore) { }

  getPortfolios() {
    let portfolioCollection = collection(this.fs, 'portfolios');
    return collectionData(portfolioCollection, { idField: 'id' });
  }

  addPortfolio(projectname: string, language: string, description: string, website: string, image: string) {
    let data = { projectname, language, description,website, image };
    let portfolioCollection = collection(this.fs, 'portfolios');
    return addDoc(portfolioCollection, data);
  }



  updatePortfolio(updatedPortfolio: any) {
    const docRef = doc(this.fs, 'portfolios/' + updatedPortfolio.id);
    return setDoc(docRef, updatedPortfolio);
  }

  deletePortfolio(id: string) {
    const docRef = doc(this.fs, 'portfolios/' + id);
    return deleteDoc(docRef);
  }

  getStorage() {
    return new Storage();
  }


  hidePortfolioEntry(id: string): Promise<void> {
    const docRef = doc(this.fs, 'portfolios/' + id);
    return setDoc(docRef, { hidden: true }, { merge: true });
  }

  unhidePortfolioEntry(id: string): Promise<void> {
    const docRef = doc(this.fs, 'portfolios/' + id);
    return setDoc(docRef, { hidden: false }, { merge: true });
  }



}
