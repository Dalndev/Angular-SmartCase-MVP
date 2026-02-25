import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayout } from './layouts/main-layout';

@Component({
  imports: [RouterModule, MainLayout],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-smartcase';
}
