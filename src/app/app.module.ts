import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Services
import { WishListService } from './services/wishlist.services';

// Components
import { TabsPage } from '../pages/tabs/tabs';
import { PendingComponent } from '../pages/pending/pending.component';
import { AquiredComponent } from '../pages/aquired/aquired.component';
import { AddComponent } from '../pages/agregar/agregar.component';
import { DetailComponent } from '../pages/detail/detail.component';



// Pipes
import { PlaceholderPipe } from '../app/pipes/placeholder.pipe';
import { PendingPipe } from '../app/pipes/pending.pipe';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PendingComponent,
    AquiredComponent,
    PendingComponent,  
    AddComponent,
    DetailComponent,
    PlaceholderPipe,
    PendingPipe,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendingComponent,
    AquiredComponent,
    PendingComponent,
    AddComponent,
    DetailComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
