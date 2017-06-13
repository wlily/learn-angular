import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Hero} from "./hero";
import "rxjs/add/operator/map";
/**
 * Created by wll on 17-6-13.
 */

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map(response => response.json().data as Hero[]);
  }
}
