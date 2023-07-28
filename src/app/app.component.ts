// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
// })
// export class AppComponent {
//   constructor() {}
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'Products',
      url: '/products',
      icon: 'list-outline',
    },
    {
      title: 'Create Product',
      url: '/stock',
      icon: 'add-outline',
    },
    {
      title: 'Customers',
      url: '/customers',
      icon: 'list-outline',
    },
    // {
    //   title: 'List Products',
    //   url: '/products',
    //   icon: 'list-outline',
    // },
    // Add more menu items as needed
  ];
}
