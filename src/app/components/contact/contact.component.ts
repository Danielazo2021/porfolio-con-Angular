import { Component, OnInit , ViewChild} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public widthSlider:number;
  public anchuraToSlider:number;
  public captions:boolean;
  public autor: any;

  @ViewChild('textos') textos:any;

    constructor(){
      this.widthSlider=0;
      this.anchuraToSlider=0;
      this.captions=true;
    }
    ngOnInit(): void {
     //console.log(document.querySelector('#texto')?.innerHTML);
      //console.log(this.textos.nativeElement.textContent);
      //ver porque no anda el view child
    }
    
    cargarSlider(){
      this.anchuraToSlider = this.widthSlider;      
    }
    borrarSlider(){     
      this.anchuraToSlider = 0;      
    }
    getAutor(event:any){
      this.autor= event;
    }
}
