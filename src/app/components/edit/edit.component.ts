import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Global } from 'src/app/services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService, UploadService]
})
export class EditComponent implements OnInit{
    public title: string;
    public project: Project=new Project('','inicializado','','',2022,'','',);
    public save_project:any;
    public status: string;
    public fileToUpload: Array<File>= new Array; // ver si me toma el new 
    public url:string;
  
  constructor(
      private _projectService: ProjectService,
      private _uploadService: UploadService,
      private _route: ActivatedRoute,
      private _router:Router,
      
    ){
      this.title=" Editar Proyecto";
      this.url= Global.url;
     // this.project= new Project('','','','',2022,'','',);
      this.status=' ';
    }




  ngOnInit(): void {
    this._route.params.subscribe( (params:any) => {
      let id= params.id;
      
     this.getProject(id);
    });
  }

  getProject(id:any){
     this._projectService.getProject(id).subscribe(
      response=>{
       console.log(response)
       this.project= response.project;
      },
      error=>{
        console.log(<any>error);

      }
     )
  }


  // esto lo agrege yo que copie del create
  onSubmit(form:any){
   
    //guardar los datos
    this._projectService.updateProject(this.project).subscribe(
      response=>{
        if(response.project){
        
          //subir la imagen
          this._uploadService.makeFileRequest(Global.url+"upload-image/"+response.project._id,[],this.fileToUpload, 'image' ).then((result:any)=>{
            this.save_project= result.project; //aca seria edit??
            this.status='success';
           
          });     
    } else{
          this.status='failed';
        }
          console.log(response);
    },
    error =>{
      console.log(<any>console.error);
    
    } 
    );
  }

  fileChangeEvent(fileInput:any){
    this.fileToUpload= <Array<File>>fileInput.target.files;
  }

}

