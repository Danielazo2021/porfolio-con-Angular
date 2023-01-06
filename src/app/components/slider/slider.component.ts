import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

declare var $:any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit{

  @Input() anchura:number =0;
  @Input('etiquetas') captions:boolean=false;
  @Output() conseguirAutor= new EventEmitter();
  public autor:any;

  constructor(){
    this.autor={
      nombre: "Daniel Grecco",
      linkedin: "https://www.linkedin.com/in/daniel-alberto-grecco/"
    }


  }
  ngOnInit(): void {
    $("#logo").click(function(e:any){
      e.preventDefault();
    
    $("header").css("background","green")
                .css("height","50px");
    });


    
      $('.galeria').bxSlider({        
        mode: 'fade',
        captions: true,
        slideWidth: this.anchura
       
      });
    }

      lanzar(event:any){
       
        this.conseguirAutor.emit(this.autor);
      }
  
  
}
