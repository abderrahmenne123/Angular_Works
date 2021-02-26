import {Component, OnInit} from '@angular/core';
import {Personne} from '../../model/Personne';
import {HiringService} from '../services/hiring.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public personnes: Array<Personne> = [];


  selectedPersonne = new Personne();
  canShowDetail: boolean | undefined;


  constructor(public hiringService: HiringService) {
  }

  ngOnInit(): void {
    this.initPeronnes();
  }


  initPeronnes(): void {
    this.personnes.push({id: 1, firstname: 'amine', name: 'safi', cin: 12345678, job: 'instructeur', age: 26, path: 'path1'});
    this.personnes.push({id: 2, firstname: 'Abderrahmene', name: 'Zorgati', cin: 74152368, job: 'student', age: 24, path: 'path2'});
  }

  showDetails(personne: Personne): void {
    this.canShowDetail = true;
    console.log(personne);
    this.selectedPersonne = personne;
  }

  hire(personne: Personne): void {
    this.hiringService.hireCv(personne);
  }

  reject(personne: Personne): void {
    this.hiringService.rejectCV(personne);
  }
}
