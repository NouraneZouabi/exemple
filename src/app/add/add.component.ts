import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlatService } from '../services/plat.service';
import { plat } from '../models/plat.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  plats: plat[] = [];
  public plat : any;
  public id : any;

  constructor(private platService: PlatService) { }

  ngOnInit(): void {

  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    // Perform file handling logic here, such as reading file data or validating file type
    console.log('Selected file:', file);
  }


  onAdd(productForm: NgForm){
    const productFormData = this.prepareFormData(this.plat);
    this.platService.addPlat(productFormData, this.id).subscribe(
      ()=>{
        productForm.reset();
        this.plat.platImages = [];
      },
      (error: HttpErrorResponse)=>{
        console.log(error)
      }
      );
    
  }
  prepareFormData(plat: plat): FormData {
    const formData = new FormData();

    formData.append(
      'plat',
      new Blob([JSON.stringify(plat)], {type: 'application/json'})
    );

    for(var i=0; i<plat.platImages.length; i++){
      formData.append(
        'imageFile',
        plat.platImages[i].file,
        plat.platImages[i].file.name
      );
    }

    return formData;
  } 
}
