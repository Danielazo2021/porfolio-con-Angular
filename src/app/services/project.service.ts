import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Project } from '../models/project';
import { Global } from './global';


@Injectable()
    export class ProjectService{
        public url: string;
        constructor(
            private _http: HttpClient
        ){
            this.url= Global.url;
        }

        testService(){
            return 'Hasta aqui funcional el projectservice!!';
        }

        saveProject(project: Project):Observable<any>{
            let params= JSON.stringify(project);
            let headers= new HttpHeaders().set('Content-Type','application/json');

            return this._http.post(this.url+'save-project', params, {headers:headers});
        }

        getProjects(): Observable<any>{
            let headers= new HttpHeaders().set('Content-Type','application/json');

            return this._http.get(this.url+'get-projects', {headers:headers});

        }

        getProject(id:any): Observable<any>{
            let headers= new HttpHeaders().set('Content-Type','application/json');

            return this._http.get(this.url+'detail/'+id, {headers:headers});

        
        }


}
 

