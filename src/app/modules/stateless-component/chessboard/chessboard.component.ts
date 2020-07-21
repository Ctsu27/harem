import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Piece, PiecePosition, YPos, XPos, PiecePlayerIdEnum } from "src/app/utils/piece/piece";
import { Pawn } from "src/app/utils/piece/pawn";

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

  public moveMap = {
    a: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    },
    b: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    },
    c: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    },
    d: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    },
    e: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    },
    f: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    },
    g: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    },
    h: {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false
    }
  };
  public playerId = "WHITE";
  public selectedPiece: Piece;

  public board: {
    turn: PiecePlayerIdEnum;
    history: PiecePosition[];
    piecesInGame: Piece[];
    piecesEatenByBlack: Piece[];
    piecesEatenByWhite: Piece[];
  };

  constructor(private cd: ChangeDetectorRef) {
    this.board = {
      turn: PiecePlayerIdEnum.WHITE,
      history: [],
      piecesInGame: [
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: { y: "1", x: "a" },
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: { y: "3", x: "a" },
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        })
      ],
      piecesEatenByBlack: [],
      piecesEatenByWhite: []
    };
  }

  ngOnInit() {}

  public selectPiece(event: Event, piece: Piece) {
    if (event) {
      event.stopPropagation();
    }
    this.selectedPiece = piece;
    this.cd.detectChanges();
  }

  public clearSelectedPiece() {
    this.selectedPiece = null;
  }

  public openMovesFrom(event: Event, piece: Piece) {
    if (event) {
      event.stopPropagation();
    }
    console.log("%c---> open moves from:", "color: #ff0");
    console.log(piece);
    // piece.getPossibleMovesWith(this.board.piecesInGame);
    const moves = [new PiecePosition({ y: "4", x: "d" }), new PiecePosition({ y: "4", x: "e" })];
    moves.forEach(move => {
      this.moveMap[move.x][move.y] = true;
    });
    this.cd.detectChanges();
  }

  public clearMoves() {
    Object.getOwnPropertyNames(this.moveMap).forEach(xAxis => {
      Object.getOwnPropertyNames(this.moveMap[xAxis]).forEach(yAxis => {
        this.moveMap[xAxis][yAxis] = false;
      });
    });
    this.cd.detectChanges();
  }

  public movesToArray(): PiecePosition[] {
    const res = [];
    Object.getOwnPropertyNames(this.moveMap).forEach(xAxis => {
      Object.getOwnPropertyNames(this.moveMap[xAxis]).forEach(yAxis => {
        if (this.moveMap[xAxis][yAxis]) {
          res.push(
            new PiecePosition({
              x: xAxis as XPos,
              y: yAxis as YPos
            })
          );
        }
      });
    });
    return res;
  }

  public resetPlayerActions(event: Event) {
    if (event) {
      event.stopPropagation();
    }
    // TODO clear piece target
    this.clearSelectedPiece();
    this.clearMoves();
  }

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
