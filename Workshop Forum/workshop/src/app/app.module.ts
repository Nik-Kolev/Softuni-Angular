import { ThemeModule } from './theme/theme.module';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    RecentPostsComponent,
    MainComponent,
    HomeComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    UserModule,
    ThemeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
