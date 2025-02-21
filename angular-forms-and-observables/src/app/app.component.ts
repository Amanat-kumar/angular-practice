import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShortenPipePipe } from './pipes/shorten-pipe.pipe';
import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ShortenPipePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [ShortenPipePipe]
})
export class AppComponent {
  title = 'angular-forms-and-obervables';
}
