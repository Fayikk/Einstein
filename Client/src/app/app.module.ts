import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ErrorInterceptor } from './core/Interceptors/error.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './core/Interceptors/loading.interceptor';
import { HomeModule } from './home/home/home.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    HomeModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass : ErrorInterceptor , multi:true},
    {provide:HTTP_INTERCEPTORS,useClass : LoadingInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
