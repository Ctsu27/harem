import { NgModule } from "@angular/core";
import { ChessBoardComponent } from "./stateless-component/chessboard/chessboard.component";
import { PieceComponent } from "./stateless-component/piece/piece.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [PieceComponent, ChessBoardComponent]
})
export class HaremModule {}
