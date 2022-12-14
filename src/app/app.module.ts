import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './page/list/list.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { CardComponent } from './common/card/card.component';
import { ImgPathPipe } from './pipe/img-path.pipe';
import { CardButtonsComponent } from './common/card-buttons/card-buttons.component';
import { EditComponent } from './page/edit/edit.component';
import { StrToBooleanPipe } from './pipe/str-to-boolean.pipe';
import { DefaultSelectedPipe } from './pipe/default-selected.pipe';
import { SortTitlePipe } from './pipe/sort-title.pipe';
import { SortYearPipe } from './pipe/sort-year.pipe';
import { SortFormatPipe } from './pipe/sort-format.pipe';
import { SortPlatformPipe } from './pipe/sort-platform.pipe';
import { FilterPlatformPipe } from './pipe/filter-platform.pipe';
import { SearchPipe } from './pipe/search.pipe';
import { SortStatusPipe } from './pipe/sort-status.pipe';
import { WishlistCheckPipe } from './pipe/wishlist-check.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    NavbarComponent,
    CardComponent,
    ImgPathPipe,
    CardButtonsComponent,
    EditComponent,
    StrToBooleanPipe,
    DefaultSelectedPipe,
    SortTitlePipe,
    SortYearPipe,
    SortFormatPipe,
    SortPlatformPipe,
    FilterPlatformPipe,
    SearchPipe,
    SortStatusPipe,
    WishlistCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
