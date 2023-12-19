import { Component, OnInit ,EventEmitter, Input, Output, OnChanges} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-portfolio',
  templateUrl: './add-edit-portfolio.component.html',
  styleUrls: ['./add-edit-portfolio.component.css']
})
export class AddEditPortfolioComponent implements OnInit, OnChanges {

  @Input() displayAddModel: boolean = false;
  @Input() selectedPortfolio: any = null ;
  @Output() clickClose: EventEmitter<any> = new EventEmitter();
  modelType = "Add" ;

  selectedFile: File | null = null;
  previewUrl: any = null;



  portfolioForm: FormGroup;

  constructor(private fb: FormBuilder, private service: SharedService) {
    this.portfolioForm = this.fb.group({
      projectname: ['', Validators.required],
      language: ['', Validators.required],
      description: [''],
      website: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit() {}

  ngOnChanges(): void {
    if(this.selectedPortfolio){
      this.modelType = "Edit";
      this.portfolioForm.patchValue(this.selectedPortfolio)
    }else{
      this.portfolioForm.reset();
      this.modelType = "Add";
    }
  }


  closeModel() {
    this.displayAddModel = false;
    this.clickClose.emit();
  }

  addPortfolio() {
    if (this.portfolioForm.valid) {
      const formData = this.portfolioForm.value;

      if (this.modelType === 'Add') {

        this.service.addPortfolio(
          formData.projectname,
          formData.language,
          formData.description,
          formData.website,
          formData.image
        ).then(() => {
          console.log('Portfolio added successfully!');
          this.closeModel();
        }).catch((error) => {
          console.error('Error adding portfolio:', error);
        });
      } else if (this.modelType === 'Edit' && this.selectedPortfolio) {

        const updatedPortfolio = {
          ...this.selectedPortfolio,
          projectname: formData.projectname,
          language: formData.language,
          description: formData.description,
          website: formData.website,
          image: formData.image
        };

        this.service.updatePortfolio(updatedPortfolio).then(() => {
          console.log('Portfolio updated successfully!');
          this.closeModel();
        }).catch((error) => {
          console.error('Error updating portfolio:', error);
        });
      }
    }
  }
}
