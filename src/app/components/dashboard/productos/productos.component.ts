
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Producto } from 'src/app/interfaces/producto';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  products:Producto[]=[];
  displayedColumns: string[] = ['idProducto', 'nombreProducto','categoria','proveedor', 'cantidadPorUnidad', 'precioUnidad','unidadesEnExistencia','acciones'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _productService:ProductsService,private _snackBar: MatSnackBar) { }
 
  ngOnInit(): void {
    this.getDataService();
  }
  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
    //debugger;
  }
  getDataService(){       

    this._productService.getProducts().subscribe(
      data=>{
        this.products=data;
        this.dataSource=new MatTableDataSource<Producto>(this.products)
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort = this.sort;
        //console.log(data);
      },
      err=>console.log(err)
    )  
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteItem(id:number){
    console.log(id);
    
    this._productService.deleteItem(id).subscribe(res=>{
      this._snackBar.open('Registro eliminado','',{
        duration:5000,
        horizontalPosition:'center',
        verticalPosition:'bottom'
      });
      this.getDataService();
    },
    err=>console.log(err)
    );
  }
  infoItem(id:number){

  }
  ediItem(id:number){
    
  }

}
