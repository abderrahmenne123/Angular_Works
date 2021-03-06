import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Personne} from '../../../model/Personne';
import {CvService} from '../../services/cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private cvService: CvService,
    protected  router: Router
  ) { }

  ngOnInit(): void {
  }

  addPersonne(personne: Personne) {
    this.cvService.addPerson(personne);
    const LINK = ['cv'];
    this.router.navigate(LINK);
  }
}
