import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service'; // Import ProductoService
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  
  productoForm: FormGroup;
  titulo = 'Crear producto';

  constructor(private fb: FormBuilder, private router: Router, private productoService: ProductoService) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  agregarProducto() {
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value
    };

    // Use ProductoService to save the product
    this.productoService.guardarProducto(PRODUCTO).subscribe(
      response => {
        console.log('Producto registrado con éxito', response);
        // Navigate back to listing table
        this.router.navigate(['/']);
      },
      error => {
        console.error('Error al registrar el producto', error);
        // Handle error here, e.g., show a notification to the user
      }
    );
  }
}
