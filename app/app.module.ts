import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//annotation
@NgModule({//module decorator
  imports: [ BrowserModule ],//an array of other modules and content this module requires
  //^differs from the import statements at the top of the file. The import statements at the top import functionality from the Angular core. The imports array under the decorator imports other pieces of our application we want included in this module.
  declarations: [ AppComponent ],//array of all components that will reside in this module
  bootstrap: [ AppComponent ]//array of components required immediately upon launching the application
})

export class AppModule {}
