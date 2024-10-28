import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../../theorie/shared/services/navigate.service';
import { Router } from '@angular/router';
import { CorrectionStorageService } from './components/correction/tools/storage.service';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrl: './storages.component.scss'
})
export class StoragesComponent{
  constructor(public readonly nav: NavigateService) {} 


}