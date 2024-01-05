import { Component, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedDate:string='';
  title = 'timer';


}
