import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "databinding", pathMatch: "full" },
  { path: "databinding", loadChildren: "app/databinding/databinding.module#DatabindingModule" },
  { path: "directivas", loadChildren: "app/directivas/directivas.module#DirectivasModule" },
  { path: "pipes", loadChildren: "app/pipes/pipes.module#PipesModule" },
  { path: "servicios", loadChildren: "app/servicios/servicios.module#ServiciosModule" },
  { path: "rutas", loadChildren: "app/rutas/rutas.module#RutasModule" },
  { path: "formularios", loadChildren: "app/formularios/formularios.module#FormulariosModule" },
  { path: "firebase", loadChildren: "app/firebase/firebase.module#FirebaseModule" },
  { path: "autenticacion", loadChildren: "app/autenticacion/autenticacion.module#AutenticacionModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
