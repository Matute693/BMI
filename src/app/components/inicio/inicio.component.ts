import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  edad = 23;
  peso = 82;
  altura = 170;
  sexo= 'Masculino';

  
  constructor(private Router: Router) { }
  
  ngOnInit(): void {
  }
  
  cambiarAltura(event: any) {
    this.altura = event.target.value;
    // console.log(event.target.value);
  }
  masculino(){
    this.sexo = 'Masculino';
  }
  femenino(){
    this.sexo = 'Femenino';
  }
  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    console.log(BMI.toFixed(1));
    this.Router.navigate(["/resultado", BMI.toFixed(1)]);

  }

}
