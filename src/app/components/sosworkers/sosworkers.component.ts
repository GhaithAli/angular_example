import { Component, OnInit } from '@angular/core';
import {SosWorkersService} from '../../services/sos-workers-service.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sosworkers',
  templateUrl: './sosworkers.component.html',
  styleUrls: ['./sosworkers.component.css']
})
export class SOSWorkersComponent implements OnInit {

  private workers$: Observable<Worker[]>;
  workers: Worker[];

  constructor(workerService: SosWorkersService) {
    // @ts-ignore
    this.workers$ = workerService.getWorkers();
    this.workers = [];
  }

  ngOnInit() {
    this.workers$.subscribe(result => {
      this.workers = result;
    });
  }

}
