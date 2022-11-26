import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { AdminComponent } from './page/admin/admin.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { CardComponent } from './common/card/card.component';
import { ImgPathPipe } from './pipe/img-path.pipe';
import { CardButtonsComponent } from './common/card-buttons/card-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    AdminComponent,
    NavbarComponent,
    CardComponent,
    ImgPathPipe,
    CardButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
