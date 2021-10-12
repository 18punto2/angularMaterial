import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {
  category: any[] = [
    {value: 1, viewValue: 'Bebidas'},
    {value: 2, viewValue: 'Comida'},
    {value: 3, viewValue: 'Verdura'}
  ];
  proveedor: any[] = [
    {value: 1, viewValue: 'Exotic Liquids'},
    {value: 2, viewValue: 'New Orleans Cajun Delights'},
    {value: 3, viewValue: 'Grandma Kellys Homestead'}
  ];
  form:FormGroup;
  constructor(private fb:FormBuilder,private _service:ProductsService,private router:Router,private _snackBar: MatSnackBar) { 
    this.form=this.fb.group({
      nombre:['',Validators.required],
      presen:['',Validators.required],
      precio:['',Validators.required],
      catego:['',Validators.required],
      provee:['',Validators.required],
      cantid:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addItem(){    
    const item:Producto={
      idProducto:0,
      nombreProducto:this.form.value.nombre,
      cantidadPorUnidad:this.form.value.presen,
      precioUnidad:this.form.value.precio,
      idcategoria:this.form.value.catego,
      idproveedor:this.form.value.provee,
      unidadesEnExistencia:this.form.value.cantid,
      categoria:"",
      proveedor: ""
    }
    console.log(item);

    this._service.addItem(item).subscribe(res=>{
      this._snackBar.open('Item registrado','',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      });
      this.router.navigate(['/dashboard/productos']);  
    },
    err=>console.log(err)
    )
    

  }
}
