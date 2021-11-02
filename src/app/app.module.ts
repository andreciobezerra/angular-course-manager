import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { NotFoundErrorComponent } from './errors/not-found-error/not-found-error.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarComponent,
    NotFoundErrorComponent,
  ],
  imports: [
    BrowserModule,
    CourseModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'courses', pathMatch: 'full' },
      { path: '**', component: NotFoundErrorComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
