import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CvService} from '../services/cv.service';
import {Personne} from '../../model/Personne';
const LINk = ['cv'];
@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {
//personne: Personne |undefined;
personne = new Personne();
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.getPersonneById(params.id);
        if (!this.personne){

          this.router.navigate(LINk);
        }
      }
    );
  }

  deletePerson() {
   if (this.cvService.deletePerson(this.personne)){
     this.router.navigate(LINk);
   }
  }
}
