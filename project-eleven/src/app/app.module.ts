import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpformComponent } from './empform/empform.component';
import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component'
const routes: Routes=[
    {path:'',component:HomeComponent},
    {path:'empform',component:EmpformComponent},
  ];
@NgModule({
  declarations: [
    AppComponent,
    EmpformComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
