import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-challenge-popup',
  templateUrl: './challenge-popup.component.html',
  styleUrls: ['./challenge-popup.component.less']
})
export class ChallengePopupComponent implements OnInit {

  @Input() point: any;
  @Input() show: boolean;
  @Output() onClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.onClose.emit();
  }

}
