import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FristComponentComponent } from './components/frist-component/frist-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ClickEventComponent } from './components/click-event/click-event.component';

@NgModule({
  declarations: [
    AppComponent,
    FristComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    ClickEventComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
