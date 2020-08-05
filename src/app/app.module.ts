import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { JokeContainerComponent } from './components/joke-container/joke-container.component';
import { ButtonComponent } from './components/button/button.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, FooterComponent, NavBarComponent, ToolbarComponent, JokeContainerComponent, ButtonComponent, NavItemComponent, SearchInputComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
