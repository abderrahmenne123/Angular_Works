import {Injectable} from '@angular/core';
import {Personne} from '../../model/Personne';

@Injectable({
  providedIn: 'root'
})
export class HiringService {

  hiredCvs: Array<Personne> = [];

  constructor() {
  }


  getAllHiredCV(): Personne[] {
    return this.hiredCvs;
  }


  hireCv(personne: Personne): void {
    const index = this.hiredCvs.indexOf(personne);
    if (index > -1) {
      alert('CV already hired');

    } else {
      this.hiredCvs.push(personne);
      alert('You are hiring the cv');
    }
    console.log('hired CV ==>');
    console.log(this.hiredCvs);

  }


  rejectCV(personne: Personne): void {
    const index = this.hiredCvs.indexOf(personne);
    if (index > -1) {
      this.hiredCvs.splice(index, 1);
      alert('CV rejected');
    }
  }


  isCvHired(personne: Personne): boolean {
    const index = this.hiredCvs.indexOf(personne);
    return index > -1;

  }

}




