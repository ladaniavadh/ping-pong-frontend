import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http/http.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    public httpService: HttpService

  ) { }
  public gameForm!: FormGroup;
  public gameSubmit = false;
  player1: any;
  player2: any;

  ngOnInit(): void {
    this.gameForm = this.formBuilder.group({
      gameDate: [''],
      player1: ['', [Validators.required]],
      player2: ['', [Validators.required]],
    });
  }

  enterPlayerName(id:any, e:any) {
    if (id === '1') {
      this.player1 = e.target.value
    } else {
      this.player2 = e.target.value
    }
  }

  addGame() {
    console.log(this.gameForm);

    this.gameSubmit = true
    if (this.gameForm.valid) {
      const reqBody = {
        date: this.gameForm.value.gameDate,
        player1: this.gameForm.value.player1,
        player2: this.gameForm.value.player2,
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
