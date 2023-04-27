import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AsyncyPipe } from 'asyncy';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { DummyComponent } from './dummy/dummy.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    AsyncyPipe,
    CommonModule,
    DummyComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value$ = of(true);
}
