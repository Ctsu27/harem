import { Component, OnInit } from "@angular/core";
import { Piece, PiecePosition, Pawn, YPos, XPos } from "src/app/utils/piece";

@Component({
  selector: "chess-board",
  templateUrl: "./chessboard.component.html",
  styleUrls: ["./chessboard.component.less"]
})
export class ChessBoardComponent implements OnInit {
  private static readonly CHESS_BOX_SIZE_IN_PX = 64;
  public readonly boardArrayLength = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined
  ];

  public board: {
    turn: "WHITE" | "BLACK";
    history: PiecePosition[];
    piecesInGame: Piece[];
    piecesEatenByBlack: Piece[];
    piecesEatenByWhite: Piece[];
  };

  constructor() {
    this.board = {
      turn: "WHITE",
      history: [],
      piecesInGame: [
        new Pawn({
          playerId: "BLACK",
          pos: { y: "1", x: "a" },
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: "BLACK",
          pos: { y: "3", x: "a" },
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        })
      ],
      piecesEatenByBlack: [],
      piecesEatenByWhite: []
    };
  }

  ngOnInit() {}

  public translateChessYPosToPx(y: YPos): string {
    const positions = ["8", "7", "6", "5", "4", "3", "2", "1"];
    const factor = positions.findIndex(pos => pos === y);

    return `${ChessBoardComponent.CHESS_BOX_SIZE_IN_PX * factor}px`;
  }

  public translateChessXPosToPx(x: XPos): string {
    const positions = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const factor = positions.findIndex(pos => pos === x);

    return `${ChessBoardComponent.CHESS_BOX_SIZE_IN_PX * factor}px`;
  }
}
