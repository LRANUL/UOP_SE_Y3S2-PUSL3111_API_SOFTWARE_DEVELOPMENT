import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Western',
      data: [1, 1, 12, 2, 3, 4, 7]
    }, {
        name: 'Eastern',
        data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
        name: 'Northern',
        data: [163, 203, 276, 408, 547, 729, 628]
      }, {
        name: 'Southern',
        data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
        name: 'North Western',
        data: [2, 2, 2, 6, 13, 30, 46]
      },
      {
        name: 'North Central',
        data: [2, 2, 2, 6, 13, 30, 46]
      },
      {
        name: 'Central',
        data: [2, 2, 2, 6, 13, 30, 46]
      },
      {
        name: 'Sabaragamuwa',
        data: [2, 2, 2, 6, 13, 30, 46]
      },
      {
        name: 'Uva',
        data: [2, 2, 2, 6, 13, 30, 46]
      }

  ];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Colombo General Hospital - කොළඹ මහ රෝහල',
      y: 1,
      sliced: true,
      selected: true
    }, {
      name: 'PGH – Badulla - පළාත් මහ රෝහල - බදුල්ල',
      y: 1
    }, {
      name: 'DGH – Polonnaruwa - දිස්ත්‍රික් මහ රෝහල - පොලොන්නරුව',
      y: 2
    }, {
      name: 'Base Hospital- Hambantota - මූලික රෝහල - හම්බන්තොට',
      y: 4.67
    }, {
      name: 'DGH-Kalutara - දිස්ත්‍රික් මහ රෝහල',
      y: 4.18
    }, {
      name: 'Base Hospital Mulleriyawa - මූලික රෝහල - මුල්ලේරියාව',
      y: 1.64
    }, {
      name: 'DGH- Gampaha - දිස්ත්‍රික් මහ රෝහල - ගම්පහ',
      y: 1.6
    }, {
      name: 'Base Hospital - Monaragala - මූලික රෝහල - මොනරාගල',
      y: 1.2
    }, {
      name: 'TH - Anuradhapura - ශික්ෂණ රෝහල - අනුරාධපුර',
      y: 2.61
    }];
  }





}
