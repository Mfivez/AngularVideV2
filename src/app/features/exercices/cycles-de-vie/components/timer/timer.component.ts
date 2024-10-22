import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit, OnDestroy  {
  seconds: number = 0;
  private timerId?: number;

  ngOnInit(): void {
    this.timerId = window.setInterval( () => {
      this.seconds++;
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
      console.log('Le composant TimerComponent a été détruit');
    }
  }
}
