import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import { ListadoComponent } from './listado/listado.component'
import { DetalleComponent } from './detalle/detalle.component'

const appRoutes: Routes = [
{path: 'listado', component: ListadoComponent},
{path: 'detalle', component: ListadoComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);