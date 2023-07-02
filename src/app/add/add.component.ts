import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { plat } from '../models/plat.model';
import { NgForm } from '@angular/forms';
import { PlatService } from '../services/plat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  plats: plat[] = [];
  plat = new plat()
  public id: any;
  userFile: any
  message?: String
  imagePath: any
  imgURL: any


  constructor(private platService: PlatService,
    private router: Router) { }

  ngOnInit(): void {

  }
  Addimage(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;


      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = 'Only images are supported.';
        console.log(this.message)
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
        this.plat.photo = this.imgURL

      };
    }
  }


  onAdd() {
    this.platService.addPlat(this.plat).subscribe(
      () => {
        this.router.navigate(["/plat"])
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    );

  }
  // prepareFormData(plat: plat): FormData {
  //   const formData = new FormData();

  // formData.append(
  //   'plat',
  //   new Blob([JSON.stringify(plat)], { type: 'application/json' })
  // );

  // for (var i = 0; i < plat.platImages.length; i++) {
  //   formData.append(
  //     'imageFile',
  //     plat.platImages[i].file,
  //     plat.platImages[i].file.name
  //   );
  // }

  //   return formData;
  // }
}
