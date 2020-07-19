import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChessBoardComponent } from "./modules/stateless-component/chessboard/chessboard.component";
import { HaremModule } from "./modules/harem.module";

const routes: Routes = [
  {
    path: "**",
    redirectTo: "game"
  },
  {
    path: "game",
    component: ChessBoardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HaremModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
