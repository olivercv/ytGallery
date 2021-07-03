import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private url: string = 'https://www.googleapis.com/youtube/v3';
  private api_key: string = 'AIzaSyAQlVlYPmMveNktiF8S4p-BmwiGUSBaANk';
  private canal: string = 'UC6eCA7AfVLjNGYmZkSSQWPw';

  constructor(private _http: HttpClient) { }

  obtenerVideos() {
    const parametros = new HttpParams().set('part', 'snippet').set('channelId', this.canal).set('maxResults', '100').set('key', this.api_key);
    const vinculo = `${this.url}/search`;
    return this._http.get(vinculo, {params: parametros}).pipe(map(resp => resp));
  }

}
