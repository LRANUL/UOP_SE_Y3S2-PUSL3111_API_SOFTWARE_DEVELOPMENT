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
      name: 'Chrome',
      y: 1,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 1
    }, {
      name: 'Firefox',
      y: 2
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }





}
