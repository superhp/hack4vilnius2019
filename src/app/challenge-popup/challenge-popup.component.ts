import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-challenge-popup',
  templateUrl: './challenge-popup.component.html',
  styleUrls: ['./challenge-popup.component.less']
})
export class ChallengePopupComponent implements OnInit {

  @Input() point: any;
  @Input() show: boolean;
  @Input() result: string;
  @Input() notAtPoint: boolean;
  @Output() onClose = new EventEmitter();

  answer: string = "";
  success = false;
  loading = 0;

  constructor(private fns: AngularFireFunctions) { }

  ngOnInit() {
  }

  close() {
    this.onClose.emit();
  }

  checkAnswer() {
    this.loading = 1;
    const checkAnswer = this.fns.httpsCallable('checkAnswer');
    console.log({point: this.point.id, result: this.result, answer: this.answer});
    checkAnswer({point: this.point.id, result: this.result, answer: this.answer}).subscribe(data => {
      this.success = data;
      this.loading = 2;
      if(this.success)
        this.loading = 3;
      setTimeout(() => {
        if(this.success)
          this.close();
        this.loading = 0;
        this.answer = "";
      }, 1000);
    });
  }

}
