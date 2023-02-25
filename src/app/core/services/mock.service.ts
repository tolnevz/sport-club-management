import { MockResponse } from './../models/mock.model';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  constructor(private configService: ConfigService, private http: HttpClient) {}

  getMockData(entity: string) {
    return this.http.get<MockResponse>(`${this.configService.getMockPathPrefix()}/${entity}.json`);
  }

  findById(entity: string, id: number): Observable<any> {
    return this.http.get<any>(`${this.configService.getMockPathPrefix()}/${entity}.json`).pipe(
      switchMap((data) => data.list),
      filter((data: any) => {
        return data.id === id;
      }),
    );
  }

  listById(entity: string, id: number, entityListFor?: string): Observable<any> {
    return this.http.get<MockResponse>(`${this.configService.getMockPathPrefix()}/${entity}.json`).pipe(
      map((data) => {
        if (entityListFor) {
          return data.list.filter((element) => {
            return element[entityListFor].id === id;
          });
        } else {
          return data.list.filter((element) => {
            return element.id === id;
          });
        }
        
      }),
    );
  }
}
