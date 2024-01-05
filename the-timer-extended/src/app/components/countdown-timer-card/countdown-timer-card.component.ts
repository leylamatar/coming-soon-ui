import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-card',
  templateUrl: './countdown-timer-card.component.html',
  styleUrls: ['./countdown-timer-card.component.scss'],
  animations: [
    trigger('flip', [
      transition("* => 1", [
        query('.flip', [
          animate('300ms linear', style({ transform: 'rotateX(-180deg)' })) //takvim animasyonu
        ])
      ])
    ])
  ]
})
export class CountdownTimerCardComponent implements OnInit {
  @Input() value!: number;
  @Input() label!: string;
  previousValue!: number;

  ngOnInit(): void {
    this.previousValue = this.value;
  }
}
