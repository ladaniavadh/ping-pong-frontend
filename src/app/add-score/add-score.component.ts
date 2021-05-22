import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-add-score',
  templateUrl: './add-score.component.html',
  styleUrls: ['./add-score.component.css']
})
export class AddScoreComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public httpService: HttpService
  ) { }

  public scoreForm!: FormGroup;
  public scoreSubmit = false;

  ngOnInit(): void {
    this.scoreForm = this.formBuilder.group({
      player1: ['', [Validators.required]],
      player2: ['', [Validators.required]],
    });
    this.getGameList()
  }

  getGameList() {
    this.httpService
      .getHttp('get-game')
      .toPromise()
      .then((res: any) => {
        console.log(res);
      })
  }

  addScore() {
    console.log(this.scoreForm);

    this.scoreSubmit = true
    if (this.scoreForm.valid) {
      const reqBody = {
        gameId: this.scoreForm.value.gameDate,
        player1: this.scoreForm.value.player1,
        player2: this.scoreForm.value.player2,
      };
      this.httpService
        .postHttp('add-game', reqBody)
        .toPromise()
        .then((res: any) => {
          console.log(res);
        })
    }

  }

}
