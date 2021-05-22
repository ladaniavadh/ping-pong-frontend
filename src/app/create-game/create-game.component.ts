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
      player_one: ['', [Validators.required]],
      player_two: ['', [Validators.required]],
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
        player_one: this.gameForm.value.player_one,
        player_two: this.gameForm.value.player_two,
      };
      this.httpService
        .postHttp('create', reqBody)
        .toPromise()
        .then((res: any) => {
          if (res.status_code == "200") {
            alert('insert successfully.')
          }
        })
    }

  }

}
