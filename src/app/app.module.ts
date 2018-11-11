import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { openSenseApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
    declarations: [
        openSenseApp,
        HomePage,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        IonicModule.forRoot(openSenseApp),
        LeafletModule,
        IonicStorageModule.forRoot()

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        openSenseApp,
        HomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ApiProvider,
        LocalNotifications,
        NativeGeocoder,
    ]
})
export class AppModule { }
