import { Component, OnInit, inject } from '@angular/core';
import { PlatService } from '../services/plat.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { plat } from '../models/plat.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id?: number
  plat = new plat()
  userFile: any
  message?: String
  imagePath: any
  imgURL: any
  constructor(
    private service: PlatService,
    private rout: ActivatedRoute,
    private router: Router

  ) { }


  update() {
    this.service.updatePlat(this.plat, this.plat.id!).subscribe(() => {
      this.router.navigate(["/plat"])
    })
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


  ngOnInit(): void {
    this.id = this.rout.snapshot.params["id"]
    this.service.getPlatById(this.id!).subscribe(res => {
      this.plat = res
      console.log(this.plat)
    })
  }

}
