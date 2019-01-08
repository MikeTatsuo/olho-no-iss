import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { WherePage } from '../pages/where/where';
import { WhenPage } from '../pages/when/when';
import { WhoPage } from '../pages/who/who';

import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenNotifyProvider } from '../providers/open-notify/open-notify';
import { HttpClientModule } from '@angular/common/http';
import { IssPositionProvider } from '../providers/iss-position/iss-position';
import { IssPassProvider } from '../providers/iss-pass/iss-pass';
import { IssPeopleProvider } from '../providers/iss-people/iss-people';

@NgModule({
  declarations: [
    MyApp,
    WherePage,
    WhenPage,
    WhoPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WherePage,
    WhenPage,
    WhoPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    OpenNotifyProvider,
    IssPeopleProvider,
    IssPassProvider,
    IssPositionProvider
  ]
})
export class AppModule { }
