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
  public selectedGame: any = [];
  pendingGames: any = []
  ngOnInit(): void {
    this.scoreForm = this.formBuilder.group({
      selectedGame: ['', [Validators.required]],
      score_one: ['', [Validators.required]],
      score_two: ['', [Validators.required]],
    });
    this.getGameList()
  }

  getGameList() {
    this.httpService
      .getHttp('pendingGames')
      .toPromise()
      .then((res: any) => {
        console.log(res);
        this.pendingGames = res.data
      })
  }

  onChange(e: any) {
    console.log(e.target.value);
    this.selectedGame = this.pendingGames.find((x: any) => x.id == e.target.value)
    console.log(this.selectedGame);

  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  addScore() {
    // alert(this.selectedGame)
    console.log(this.scoreForm);

    this.scoreSubmit = true
    if (this.scoreForm.valid) {
      const reqBody = {
        id: this.selectedGame.id,
        score_one: this.scoreForm.value.score_one,
        score_two: this.scoreForm.value.score_two,
      };
      this.httpService
        .postHttp('update', reqBody)
        .toPromise()
        .then((res: any) => {
          console.log(res);
          if (res.status_code == "200") {
            alert('Score added!')
            this.ngOnInit()
            this.selectedGame = []
          }
        })
    }

  }

}
