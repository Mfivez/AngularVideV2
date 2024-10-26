import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from '../../../../../theorie/shared/services/navigate.service';

@Component({
  selector: 'correction-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class CorrectionUserComponent implements OnInit {
  userId: number | null = null;

  constructor(private route: ActivatedRoute, public nav: NavigateService) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
  }
}