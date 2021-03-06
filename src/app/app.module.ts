import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { matModules } from './modules/material-design.module';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidenavComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ...matModules,
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
