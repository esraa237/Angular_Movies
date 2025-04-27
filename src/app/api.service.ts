import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }

  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2JhZjdmMDgxMzYxMjIxYWYwZGRmZWExZTE0NmMwMiIsIm5iZiI6MTc0NTc2MjE4NS41NTcsInN1YiI6IjY4MGUzNzg5Zjc2OWYwYWY2YTgxMWJmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sVvBYHly0PIseBn-aRvXPKmBQKpE0gHq-ZhNdNIQtXY'
    }
  };
  getAllTrending():Observable<any>{
    return this._httpClient.get('https://api.themoviedb.org/3/trending/all/day?language=en-US',this.options);
  }
  getAllMovies():Observable<any>{
    return this._httpClient.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1',this.options);
  }
  getAllTvShows():Observable<any>{
    return this._httpClient.get('https://api.themoviedb.org/3/trending/tv/day?language=en-US',this.options);
  }
  getAllPeople():Observable<any>{
    return this._httpClient.get('https://api.themoviedb.org/3/trending/person/day?language=en-US',this.options);
  }

}
