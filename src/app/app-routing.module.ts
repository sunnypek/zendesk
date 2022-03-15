import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CountsComponent } from "./counts/counts.component";
import { HomeComponent } from "./home/home.component";
import { SingleComponent } from "./single/single.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "count", component: CountsComponent },
  { path: ":id", component: SingleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
