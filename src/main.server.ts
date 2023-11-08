import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app/app.component';

export const app = () =>
  bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(ServerModule)],
  });
