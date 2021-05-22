import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(
    public httpService: HttpService
  ) { }

  allGames:any = []
  ngOnInit(): void {
    this.getGameHistory()
  }

  getGameHistory() {
    this.httpService
      .getHttp('allGames')
      .toPromise()
      .then((res: any) => {
        console.log(res);
        this.allGames = res.data;
      })
  }

}
