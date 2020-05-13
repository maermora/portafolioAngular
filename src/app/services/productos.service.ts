import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = []; 

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){
     this.http.get('https://cursoangular-c1bdf.firebaseio.com/productos_idx.json')
      .subscribe( (res: ProductoInterface[]) => {
        console.log(res);
        this.productos = res;
        this.cargando = false;
      });

   }


}
