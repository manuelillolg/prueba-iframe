import { Routes } from '@angular/router';
import { IframeComponent } from './iframe/iframe.component';

export const routes: Routes = [
  { path: '', component: IframeComponent },
 // { path: '**', redirectTo: '', pathMatch: 'full' }
];
