import { Injectable } from '@angular/core';

import Notiflix from 'notiflix-angular';

@Injectable({
  providedIn: 'root'
})
export class NotiflixService {

  constructor() {
    Notiflix.Notify.Init({
      width: '400px',
      timeout: 5000,
      position: 'right-top',
      cssAnimationStyle: 'from-top',
      distance: '15px',
      fontSize: '18px'
    });
  }

  showAlert( message: string, type = 'success' ): void{
    switch( type ){
      case 'success':
        Notiflix.Notify.Success( message );
        break;
      case 'warning':
        Notiflix.Notify.Warning( message );
        break;
      case 'failure':
        Notiflix.Notify.Failure( message );
        break;
      default:
        Notiflix.Notify.Success( message );
        break;
    }
  }
}
