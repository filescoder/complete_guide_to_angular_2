import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment01';
  showDetails = false;
  log = [];

  onToggleDetails() {
    this.showDetails = (this.showDetails) ? false : true;

    let now: Date = new Date();
    let date: Array<String> = [ String(now.getMonth() + 1), String(now.getDate()), String(now.getFullYear()) ];
    let time: Array<String> = [ String(now.getHours()), String(now.getMinutes()) ];

    for (let i of time) {
      if (Number(i) < 10) {
        i = "0" + 1;
      }
    }

    this.log.push({date: date.join("/"), time: time.join(":")});
  }
}
