import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ActiveUsersComponent } from './active/active.component';
import { InactiveUsersComponent } from './inactive/inactive.component';
import { CounterService } from './services/counter.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
