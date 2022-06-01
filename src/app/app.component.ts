import { Component, ViewChild, OnInit } from '@angular/core';
import { DynamicChildLoaderDirective } from './dynamic-child-loader.directive';
import { TabsComponent } from '@ironsource/fusion-ui/components/tabs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild(DynamicChildLoaderDirective, { static: true })
  dynamicChild!: DynamicChildLoaderDirective;

  ngOnInit(): void {
    this.loadDynamicComponent();
  }

  private loadDynamicComponent() {
    this.dynamicChild.viewContainerRef.createComponent(TabsComponent);
  }
}
