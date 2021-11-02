import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseModule } from './courses/course.module';
import { NotFoundErrorComponent } from './errors/not-found-error/not-found-error.component';

@NgModule({
  declarations: [AppComponent, NotFoundErrorComponent],
  imports: [
    BrowserModule,
    CoreModule,
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
