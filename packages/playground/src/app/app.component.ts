import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AsyncyPipe } from 'asyncy';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AsyncyPipe, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value$ = of(2);
}
