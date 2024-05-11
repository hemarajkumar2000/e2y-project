import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { ENDPOINT_URL } from '../../shared/constants';
import {HttpClient} from "@angular/common/http";
import { searchList } from '../model/search';


@Injectable({
  providedIn: 'root'
})

export class SearchServiceService {

  constructor( protected http: HttpClient) {}

  getAPIDetails(): Observable<any> {
    const apiUrl = ENDPOINT_URL;
    return this.http.get<any>(apiUrl);
  }

}
