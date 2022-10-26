import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { FormsModule } from '@angular/forms';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { CircleProgressComponent } from './componentes/circle-progress/circle-progress.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    
    BannerComponent,
    AcercaDeComponent,
    
    EducacionComponent,
    
    CircleProgressComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    ExperienciaComponent,
          
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
