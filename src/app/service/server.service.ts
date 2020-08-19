import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServerService {
  url= "http://www.e-menu.tech/app/";
  constructor(private http: HttpClient) { }

  login(data)
  {
    return this.http.post(this.url+'login',data)
             .pipe(map(results => results));
  }
  signup(data)
  {
    return this.http.post(this.url+'registrazione1.php',data)
             .pipe(map(results => results));
  }

}
