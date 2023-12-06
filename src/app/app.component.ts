import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';
  portfolios: any = [];

  constructor(private service: SharedService) {}

  ngOnInit() {
    this.refreshPortfolios();
  }

  refreshPortfolios() {
    this.service.getPortfolios().subscribe((res) => {
      this.portfolios = res;
    });
  }

  addPortfolio(projectname: string, language: string, description: string,website:string, image: string) {
    this.service.addPortfolio(projectname, language, description,website, image).then((res) => {
      console.log(res);
      this.refreshPortfolios();
    });
  }

  deletePortfolio(id: string) {
    this.service.deletePortfolio(id).then((res) => {
      console.log(res);
      this.refreshPortfolios();
    });
  }
}
