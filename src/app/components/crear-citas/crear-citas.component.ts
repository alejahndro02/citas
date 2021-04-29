import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrls: ['./crear-citas.component.css']
})
export class CrearCitasComponent implements OnInit {
  nombre: '';
  fecha:'';
  hora:'';
  sintomas:'';
  incorrecto = false;

  constructor() { }

  ngOnInit(): void {
  }
  agengarCita():void{
    if(this.nombre=='' || this.fecha=='' || this.hora=='' || 
      this.sintomas==''){
        this.incorrecto = true;
        return;
      }
      this.incorrecto = false;


      const CITA = {
        nombre: this.nombre,
        fecha: this.fecha,
        hora: this.hora,
        sintomas: this.sintomas
      }
      this.resetCampos();

  }
  resetCampos(){
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
