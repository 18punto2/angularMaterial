import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { ReportesComponent } from './reportes/reportes.component';
import { DashboardComponent } from './dashboard.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditaProductoComponent } from './productos/edita-producto/edita-producto.component';
import { InfoProductoComponent } from './productos/info-producto/info-producto.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    ProductosComponent,
    ReportesComponent,
    CrearProductoComponent,
    EditaProductoComponent,
    InfoProductoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
