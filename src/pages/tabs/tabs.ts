import { Component } from '@angular/core';

import { PendingComponent } from '../pending/pending.component';
import { AquiredComponent } from '../aquired/aquired.component';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = PendingComponent;
  tab2Root: any = AquiredComponent;

  constructor() {

  }
}
