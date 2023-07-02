import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { PlatService } from '../services/plat.service';
import { plat } from '../models/plat.model';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  lstplat: plat[] = []

  currentPlat: any;
  imagePath: any;
  imgURL: any;
  userFile: any;
  message: any;

  constructor(public platService: PlatService,
    public authService: AuthenticationService,
    public router: Router,
    public platservice: PlatService) { }



  redirectToAddComponent() {
    this.router.navigate(['/add']);
  }

  deletePlat(id: number): void {
    this.platService.deletePlat(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();


        }
      });
  }



  onLogin() {
    this.router.navigateByUrl('/login');
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
    this.platService.getAllPlat().subscribe(res => {
      this.lstplat = res;
      console.log(this.lstplat)
    })
  }


}
