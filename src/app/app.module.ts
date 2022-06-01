import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabsModule } from '@ironsource/fusion-ui/components/tabs';
import { DynamicChildLoaderDirective } from './dynamic-child-loader.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, TabsModule],
  declarations: [AppComponent, DynamicChildLoaderDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
