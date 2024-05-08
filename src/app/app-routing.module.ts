import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes =[
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: InfoComponent,
    path: 'about'
  },
  {
    component: ContactComponent,
    path: 'contact'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
