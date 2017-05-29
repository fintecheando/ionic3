import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthService} from '../providers/auth-service';
import {TranslateService} from '@ngx-translate/core';

import { Storage } from '@ionic/storage';

import { KeycloakService } from './keycloak/keycloak.service';

//import { ProfilePage } from '../pages/profile/home';
//import { LoginPage } from '../pages/login-page/LoginPage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  initPage : any;
  rootPage: any = 'ProfilePage';

  pages: Array<{title: string, component: any, method?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService,    
    public storage: Storage,
    public translate: TranslateService) {

    this.initializeApp();

    //translate.setDefaultLang('en');
    this.translateConfig();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'page.profile', component: 'ProfilePage'},
      {title: 'page.books.list', component: 'BooksPage'},
      {title: 'page.logout', component: 'LoginPage', method: 'logout'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
       KeycloakService.init()
        .then(() => { 
            this.initPage = this.rootPage;
        })
        .catch(() => { 
          window.location.reload();
        });
      
      this.initPage = 'LoginPage';
      
    });
  }
  
  translateConfig() {
    var userLang = 'en';
 
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    this.storage.ready().then(() => {
      this.storage.get('USER_LANG').then((val) => {
        
        userLang = /(es|en)/gi.test(val) ? val : 'en';
        this.storage.set('USER_LANG', userLang);
        this.translate.use(userLang);
       
      });
     });    
  }

  openPage(page) {

    if (page.method && page.method === 'logout') {
      this.authService.logout();
    }

    this.nav.setRoot(page.component);
  }
}
