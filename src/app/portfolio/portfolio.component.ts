import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  displayAddModel: boolean = false;
  selectedPortofolio: any = null ;
  portfolio: any[] = [];
  layout:any[] = [];

  currentItem:any ;
  constructor(private service: SharedService) {}

  ngOnInit() {
    this.refreshPortfolio();
  }

  refreshPortfolio() {
    this.service.getPortfolios().subscribe((res) => {
      this.portfolio = res;
    });
  }

  showAddModel() {
    this.displayAddModel = true;
    this.selectedPortofolio = null ;
  }

  hideAddModel() {
    this.displayAddModel = false;
  }

  editPortfolio(portfolio: any) {
   this.displayAddModel = true ;
   this.selectedPortofolio = portfolio;
  }

  deletePortfolio(id: string) {
    if (confirm('Are you sure ?')) {
      this.service.deletePortfolio(id).then(() => {
        console.log('Portfolio deleted successfully!');
        this.selectedPortofolio = null;
      }).catch((error) => {
        console.error('Error deleting portfolio:', error);
      });
    }
  }

  navigateToWebsite(website: string) {
    window.open(website, '_blank');
  }


  hidePortfolioEntry(id: string) {
    this.service.hidePortfolioEntry(id).then(() => {
      console.log('Portfólió bejegyzés sikeresen elrejtve!');
      this.refreshPortfolio();
    }).catch((error) => {
      console.error('Hiba a portfólió bejegyzés elrejtésében:', error);
    });
  }

  unhidePortfolioEntry(id: string) {
    this.service.unhidePortfolioEntry(id).then(() => {
      console.log('Portfólió bejegyzés sikeresen láthatóvá vált!');
      this.refreshPortfolio();
    }).catch((error) => {
      console.error('Hiba a portfólió bejegyzés láthatóvá tételében:', error);
    });
  }



}
