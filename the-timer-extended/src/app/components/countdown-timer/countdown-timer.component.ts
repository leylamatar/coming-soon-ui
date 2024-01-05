import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { interval } from "rxjs";

@Component({
  selector: "app-countdown-timer",
  templateUrl: "./countdown-timer.component.html",
  styleUrls: ["./countdown-timer.component.scss"],
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  years: number;
  months: number;

  @Input() launchDate!: string;
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  ngOnInit(): void {

    interval(1000).subscribe((x) => this.updateValues());
  }

  updateValues() {
    let currentDate = new Date();
    console.log(this.launchDate);
    if(this.launchDate==''){
      return;
    }
    let lDate=new Date(this.launchDate);
    let diffTime = (lDate.getTime() - currentDate.getTime()) / 1000;
    diffTime = Math.max(0, diffTime);

    this.years = Math.floor(diffTime / (86400 * 365)); // 86400 seconds in a day
    diffTime -= this.years * 86400 * 365;

    this.months = Math.floor(diffTime / (86400 * 30)); // Assuming an average month has 30 days
    diffTime -= this.months * 86400 * 30;

    this.days = Math.floor(diffTime / 86400) % 30; // The remaining days after years and months
    diffTime -= this.days * 86400;

    this.hours = Math.floor(diffTime / 3600) % 24;
    diffTime -= this.hours * 3600;

    this.minutes = Math.floor(diffTime / 60) % 60;
    diffTime -= this.minutes * 60;

    this.seconds = Math.floor(diffTime % 60);
  }
  ngOnDestroy() {}
}
