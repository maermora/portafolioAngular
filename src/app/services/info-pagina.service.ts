import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;
  equipo: any[] = [];

  constructor( private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();

  
   }
   private cargarInfo(){
      //Leer el archivo JSON
      this.http.get('assets/data/data-pagina.json')
      .subscribe((res: InfoPagina)  => {

      this.cargada = true;
      this.info = res;
    });
   }
   private cargarEquipo(){
    this.http.get('https://cursoangular-c1bdf.firebaseio.com/equipo.json')
    .subscribe((res: any[])  => {

    this.equipo = res;
  });
   }
}
