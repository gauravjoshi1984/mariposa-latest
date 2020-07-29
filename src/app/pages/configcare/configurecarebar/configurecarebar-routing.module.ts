import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ConfigurecarebarPage } from "./configurecarebar.page";

const routes: Routes = [
  {
    path: "",
    component: ConfigurecarebarPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurecarebarPageRoutingModule {}
