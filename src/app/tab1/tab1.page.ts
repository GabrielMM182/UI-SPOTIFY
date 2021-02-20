import { Component } from '@angular/core';

// "resolveJsonModule": true,  adcionado em tsconfig.ts para conseguir chamar arquivos .json
// "esModuleInterop": true,    adcionado em tsconfig.ts para conseguir chamar arquivos .json
import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn
    }
  ]

  // vai ser responsavel pela parte de deixar as imgs menores e dar uma certa "suavidade
  //na hora de dar scroll entre os albums"
  opts = {
    slidesPerView: 2.4, // faz os slides ficarem menor
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  }

  constructor() {}

  dasherize(string) {
    return string.replace(/[A-Z]/g, function (char,index) {
      return (index !==0 ? '-' : '') + char.toLowerCase();
    })
  }

}
