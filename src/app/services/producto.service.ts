import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://127.0.01:4000/api/productos/';

  constructor( private http: HttpClient ) { }

  // COnsumiendo los endpoints del api backend
  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarProductos(id: String): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  obtenerProductoById(id: String): Observable<any> {
    return this.http.get(this.url + id);
  }
}
