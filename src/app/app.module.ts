import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { NgModule } from '@angular/core';


import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header/header.component';
import { TestComponentComponent } from './components/test-component/test-component.component';

import { ApiService } from './services/api.service';
import { EthService } from './services/eth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponentComponent
  ],
  imports: [
		BrowserModule,
		HttpClientModule
  ],
  providers: [
		ApiService,
		EthService
	 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
