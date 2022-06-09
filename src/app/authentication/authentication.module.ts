import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

const routes : Routes = [
  {path:'', component:SingInComponent},
  {path:'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    RegisterComponent,
    SingInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  exports:[RouterModule]
})
export class AuthenticationModule { }
