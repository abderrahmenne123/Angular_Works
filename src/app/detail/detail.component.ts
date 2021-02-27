import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../model/Personne';
import {Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() selectedPersonne = new Personne();

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  getTOPerson() {
    const LINK = ['cv', this.selectedPersonne.id];
    this.router.navigate(LINK);
  }
}
