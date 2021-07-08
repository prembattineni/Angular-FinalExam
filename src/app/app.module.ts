import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees1/employees.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employees2Component } from './employees2/employees2.component';
import { FilterpipePipe } from './custompipes/filterpipe.pipe';
import { SearchpipePipe } from './custompipes/searchpipe.pipe';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from './customdirectives/color.directive';
import { AppRoutingModule } from './app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    Employees2Component,
    FilterpipePipe,
    SearchpipePipe,
    ColorDirective
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
