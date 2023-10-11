import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: UsersComponent,
      children: [
        {
          path: ':id',
          component: UserComponent
        }
      ]
    }])
  ]
})
export class UsersModule {
}
