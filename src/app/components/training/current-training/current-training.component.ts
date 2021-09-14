import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingDialogComponent } from '../stop-training-dialog/stop-training-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {

  @Output() trainingExit = new EventEmitter<void>();
  progress = 0;
  timer: any;

  constructor( private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    this.timer = setInterval(() => {
      this.progress += 5;

      if (this.progress >= 100) {
        clearInterval(this.timer);
        this.progress = 0;
      }
    }, 1000);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingDialogComponent, {data: {
      progress: this.progress
    }});

    dialogRef.afterClosed().subscribe(res =>
      res ? this.trainingExit.emit() : this.startOrResumeTimer()
    )
  }

}
