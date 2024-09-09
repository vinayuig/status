import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  dropdowns:any = {
    homeDropdown: false,
    aboutDropdown: false,
    contactDropdown: false
  };

  toggleDropdown(dropdown: string) {
    this.dropdowns[dropdown] = !this.dropdowns[dropdown];
  }
}
