import { Component } from '@angular/core';
import { AppUserAuth } from './security/app-user-auth';
import { SecurityService } from './security/security.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWebSite';
  public collapsed = true;
  public securityObject: AppUserAuth = null;

  constructor(private securityService: SecurityService)
  {
    this.securityObject = securityService.securityObject;
  }
  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
