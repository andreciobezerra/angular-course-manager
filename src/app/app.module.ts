import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseInfoComponent } from './courses/course-info/course-info.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { NotFoundErrorComponent } from './errors/not-found-error/not-found-error.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { FormatedDatePipe } from './pipes/formated-date.pipe';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    FormatedDatePipe,
    NavBarComponent,
    NavBarComponent,
    NotFoundErrorComponent,
    CourseInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: 'courses', component: CourseListComponent },
      { path: 'courses/info/:id', component: CourseInfoComponent },
      { path: '**', component: NotFoundErrorComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
