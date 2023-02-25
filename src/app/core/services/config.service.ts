import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _mockPathPrefix = 'assets/mocks'
  constructor() { }

  getMockPathPrefix() {
    return this._mockPathPrefix;
  }
}
