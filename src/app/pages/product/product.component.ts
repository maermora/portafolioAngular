import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  producto: ProductoDescripcion;
  id: String;

  constructor( private route: ActivatedRoute, 
               public productoService: ProductosService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe( parametros => {
        this.productoService.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion)  =>{
            this.id = parametros['id'];
            this.producto = producto;
          })
      })

  }

}
