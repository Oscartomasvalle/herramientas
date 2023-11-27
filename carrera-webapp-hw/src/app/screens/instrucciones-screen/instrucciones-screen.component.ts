import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones-screen',
  templateUrl: './instrucciones-screen.component.html',
  styleUrls: ['./instrucciones-screen.component.scss']
})
export class InstruccionesScreenComponent implements OnInit{
  
    constructor(
      private router: Router,
    ) { }
  
    ngOnInit(): void {
    }

    public isMobile(){
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
        return true;
      }else{
        return false;
      }
    }

    public goJugar(){
      this.router.navigate(["juego"]);
    }
}
