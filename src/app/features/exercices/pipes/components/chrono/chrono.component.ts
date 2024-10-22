import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})
export class ChronoComponent {
  minutes: number = 0;
  seconds: number = 0;
  isRunning: boolean = false;
  intervalId?: number;

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = window.setInterval( () => {
        this.seconds++

        if (this.seconds >= 60) {
          this.seconds = 0
          this.minutes++
        }

      }, 1000)
    }
  }

  pause() {
    this.isRunning = false;
    clearInterval(this.intervalId);
    this.intervalId = undefined;
  }

  reset() {
    this.pause();
    this.minutes = 0;
    this.seconds = 0;
  }

  get displayTime(): string {
    return `${this.minutes} minute${this.minutes !== 1 ? 's' : ''} ${this.seconds} seconde${this.seconds !== 1 ? 's' : ''}`;
  }

}
