import {Component, Input, OnInit} from '@angular/core';
import {Worker} from '../../models/worker.model';

@Component({
  selector: 'app-sosworker',
  templateUrl: './sosworker.component.html',
  styleUrls: ['./sosworker.component.css']
})
export class SOSWorkerComponent implements OnInit {

  @Input() worker: Worker;
  private isAdmin: boolean;
  showDetails: boolean;
  showDetailsText = 'show details';

  constructor() {
  }

  ngOnInit() {
    this.isAdmin = this.worker.isAdmin;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    this.showDetailsText = this.showDetails ? 'hide details' : 'show details';
  }
}
