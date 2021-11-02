import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundErrorComponent } from './components/not-found-error/not-found-error.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    RouterModule.forChild([{ path: '**', component: NotFoundErrorComponent }]),
  ],
  exports: [NavBarComponent],
})
export class CoreModule {}
