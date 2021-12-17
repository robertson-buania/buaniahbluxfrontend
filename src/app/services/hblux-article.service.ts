import {Hbmedia} from './../modele/hbmedia.modele';
import {Commentaire} from './../modele/commentaire.modele';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Article} from '../modele/article.modele';
import {Hbevent} from '../modele/hbevent.modele';
import { Clienthblux } from '../modele/clienthblux.modele';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HbluxArticleService implements OnInit {

  apiUrl = "https://buaniahbluxback.herokuapp.com/"
  articlesSubjects = new Subject<Article[]>()

  constructor(private http: HttpClient) {
  }

  articles: Article[] = []
 compteClientHblux: Clienthblux|null=null
  hbevents: Hbevent[] = []
  hbmedia: Hbmedia[] = []

  articleMedia: Article[] = []
  commentaires: Commentaire[] = []
  eventsHome: Hbevent[] = []

  emitArticle() {
    this.articlesSubjects.next(this.articles.slice());
  }


  ngOnInit(): void {

  }

  findArticleAll() {

    return this.http.get<Article[]>(`${this.apiUrl}article/all`);

  }

  getArticleById(id: number) {
    return this.http.get<Article>(`${this.apiUrl}article/one/${id}`)
  }

  getHomeEvents() {
    for (let i = 0; i < 2; i++) {
      this.eventsHome.push(this.hbevents[i]);
    }
    console.log(this.eventsHome)
    return this.eventsHome
  }

  findHbMediaAll() {

    return this.http.get<Hbmedia[]>(`${this.apiUrl}media/all`);
  }

  findHbEventAll() {

    return this.http.get<Hbevent[]>(`${this.apiUrl}events/all`);
  }

  newClienthblux(clientHblux:Clienthblux){
    return this.http.post<Clienthblux>(`${this.apiUrl}clienthblux/new`,clientHblux)
  }
  updateClienthblux(clientHblux:Clienthblux){
    return this.http.put<Clienthblux>(`${this.apiUrl}clienthblux/edit`,clientHblux)
  }
  newArticle(article:Article){
    return this.http.post<Article>(`${this.apiUrl}article/new`,article)
  }
  newHBMediaArticle(hbmedia:Hbmedia){
    return this.http.post<Hbmedia>(`${this.apiUrl}media/new`,hbmedia)
  }

  getAllClienthblux(){
    return this.http.get<Clienthblux[] >(`${this.apiUrl}clienthblux/all`)
  }


  findByName(name:string){
    return this.http.get<Article>(`${this.apiUrl}clienthbluxes?name=${name}`)
  }


  uploadPhotoProduct(file: File, id:any): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.apiUrl+'media/uploadPhoto/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }


}
