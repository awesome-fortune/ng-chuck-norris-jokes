import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { JokeContainerComponent } from './components/joke-container/joke-container.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavBarComponent, ToolbarComponent, JokeContainerComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
