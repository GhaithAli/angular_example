import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Worker} from '../models/worker.model';

@Injectable({
  providedIn: 'root'
})
export class SosWorkersService {

  constructor(private _http: HttpClient) {}

  getWorkers = (): Observable<Worker[]> =>
    this._http
      .get<Worker[]>(`${environment.baseUrl}/workers`)
}
