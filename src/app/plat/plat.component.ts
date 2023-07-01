import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent {
  currentPlat: any;

  constructor( public platService : PlatService,public authService : AuthenticationService, private router : Router){}

  
  redirectToAddComponent() {
    this.router.navigate(['/add']);
  }
  
  deletePlat(): void {
    this.platService.deletePlat(this.currentPlat.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }


  onLogin() {
    this.router.navigateByUrl('/login');
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }


}
