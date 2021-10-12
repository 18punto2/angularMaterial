import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditaProductoComponent } from './productos/edita-producto/edita-producto.component';
import { InfoProductoComponent } from './productos/info-producto/info-producto.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent, children:[
      { path: '', component: InicioComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'reportes', component: ReportesComponent },    
      { path: 'crear-producto', component: CrearProductoComponent },
      { path: 'info-producto', component: InfoProductoComponent },
      { path: 'edita-producto', component: EditaProductoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
