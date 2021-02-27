import {Injectable} from '@angular/core';
import {Personne} from '../../model/Personne';



@Injectable({
  providedIn: 'root'
})
export class CvService {

  cvs: Array<Personne> = [];

  constructor() {
    this.cvs.push({id: 1, firstname: 'amine', name: 'safi', cin: 12345678, job: 'instructeur', age: 26, path: 'path1'});
    this.cvs.push({id: 2, firstname: 'Abderrahmene', name: 'Zorgati', cin: 74152368, job: 'student', age: 24, path: 'path2'});
  }

  // @ts-ignore
  getPersonneById(id: any): cvs {
  return  this.cvs.find(
      (personne) => personne.id === +id
    );
}

  deletePerson(personne: Personne) {
    const index = this.cvs.indexOf(personne);
    if (index === -1){
      alert('personne innexistante');
      return 0;
    }else{
      this.cvs.splice(index,1 );
      return  1;
    }

  }
}
