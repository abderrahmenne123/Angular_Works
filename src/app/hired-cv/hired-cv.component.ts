import {Component, OnInit} from '@angular/core';
import {HiringService} from '../services/hiring.service';
import {Personne} from '../../model/Personne';

@Component({
  selector: 'app-hired-cv',
  templateUrl: './hired-cv.component.html',
  styleUrls: ['./hired-cv.component.css']
})
export class HiredCvComponent implements OnInit {

  hiredCVs: Array<Personne> = [];

  constructor(public hiringService: HiringService) {
  }

  ngOnInit(): void {
    this.hiredCVs = this.hiringService.getAllHiredCV();
  }

}
