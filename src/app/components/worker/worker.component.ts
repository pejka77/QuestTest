import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/models/flights';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'flight-info.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Flight) {}
}

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(private workerService: WorkerService,
    public dialog: MatDialog) { }

  displayedColumns: string[] = ['name'];
  displayedColumns2: string[] = ['flight', 'origin', 'origin_data', 'dest', 'dest_date'];
  displayedColumns3: string[] = ['plane', 'duration', 'from_gate', 'to_gate'];

  showFlightDetails: boolean;

  public workers: Worker[];
  public flights: Flight[];

  ngOnInit(): void {
    this.showFlightDetails = false;
    this.workerService.getWorkers().subscribe(data => this.workers = data);
  }

  getFlight(row){

    this.showFlightDetails = false;
    this.workerService.getFlightsByWorker(row.id).subscribe(data => this.flights = data)
  }

  getFlightInfo(row){

    this.dialog.open(DialogDataExampleDialog, {
      height: '200px',
      width: '350px',
      data: {
        plane: row.plane,
        duration: row.duration,
        from: row.from_gate,
        to: row.to_gate,
      }
    });
  
  }

}
