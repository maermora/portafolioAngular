import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[] = []; 
  productosFiltrado: ProductoInterface[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
   }

   private cargarProductos(){

     return new Promise((resolve, reject) => {
        this.http.get('https://cursoangular-c1bdf.firebaseio.com/productos_idx.json')
        .subscribe( (res: ProductoInterface[]) => {
        this.productos = res;
        this.cargando = false;
        resolve();
      });

     });
   }
   getProducto( id: String){
     return this.http.get(`https://cursoangular-c1bdf.firebaseio.com/productos/${ id }.json`)
   }

   buscarProducto( termino: string){

    if (this.productos.length === 0){
      // cargar productos
      this.cargarProductos().then( ()=>{
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos( termino );

      });
    }else {
      //aplicar filtro
      this.filtrarProductos( termino );

    }
     

   }
   private filtrarProductos( termino: string){
    console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLowerCase();

   

    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf( termino ) >= 0 
        || tituloLower.indexOf( termino) >= 0 ){
        this.productosFiltrado.push( prod );
      }
    });


   }


}
