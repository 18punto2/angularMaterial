import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edita-producto',
  templateUrl: './edita-producto.component.html',
  styleUrls: ['./edita-producto.component.scss']
})
export class EditaProductoComponent implements OnInit {

  item:Observable<Producto>|undefined
  constructor(private route:ActivatedRoute,private _serviceProducto:ProductsService,private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id=params['id'];
      this.item=this._serviceProducto.getDetail(id);
    })
  }
  
  onBack():void{
    this.location.back();
  }

}
