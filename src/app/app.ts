import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TomJaspMF2 } from 'tomJaspMF2'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, TomJaspMF2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  date: Date = new Date();
  minutes = -1;
  gender = 'male';
}
