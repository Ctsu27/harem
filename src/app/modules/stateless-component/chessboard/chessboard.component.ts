import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { Piece, PiecePosition, YPos, XPos, PiecePlayerIdEnum } from "src/app/utils/piece/piece";
import { Pawn } from "src/app/utils/piece/pawn";
import { Rook } from "src/app/utils/piece/rook";
import { Knight } from "src/app/utils/piece/knight";
import { Bishop } from "src/app/utils/piece/bishop";
import { Queen } from "src/app/utils/piece/queen";
import { King } from "src/app/utils/piece/king";
import { arrayRemove } from "src/app/utils/array";

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
  public playerId = PiecePlayerIdEnum.BLACK;
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
          pos: new PiecePosition({ y: "7", x: "a" }),
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "7", x: "b" }),
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "7", x: "c" }),
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "7", x: "d" }),
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "7", x: "e" }),
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "7", x: "f" }),
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "7", x: "g" }),
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "7", x: "h" }),
          imageUrl: "/assets/player-chess-theme/standard-black/pawn.png"
        }),
        new Rook({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "8", x: "h" }),
          imageUrl: "/assets/player-chess-theme/standard-black/rook.png"
        }),
        new Rook({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "8", x: "a" }),
          imageUrl: "/assets/player-chess-theme/standard-black/rook.png"
        }),
        new Knight({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "8", x: "b" }),
          imageUrl: "/assets/player-chess-theme/standard-black/knight.png"
        }),
        new Knight({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "8", x: "g" }),
          imageUrl: "/assets/player-chess-theme/standard-black/knight.png"
        }),
        new Bishop({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "8", x: "c" }),
          imageUrl: "/assets/player-chess-theme/standard-black/bishop.png"
        }),
        new Bishop({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "8", x: "f" }),
          imageUrl: "/assets/player-chess-theme/standard-black/bishop.png"
        }),
        new Queen({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "8", x: "d" }),
          imageUrl: "/assets/player-chess-theme/standard-black/queen.png"
        }),
        new King({
          playerId: PiecePlayerIdEnum.BLACK,
          pos: new PiecePosition({ y: "8", x: "e" }),
          imageUrl: "/assets/player-chess-theme/standard-black/king.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "2", x: "a" }),
          imageUrl: "/assets/player-chess-theme/standard-white/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "2", x: "b" }),
          imageUrl: "/assets/player-chess-theme/standard-white/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "2", x: "c" }),
          imageUrl: "/assets/player-chess-theme/standard-white/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "2", x: "d" }),
          imageUrl: "/assets/player-chess-theme/standard-white/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "2", x: "e" }),
          imageUrl: "/assets/player-chess-theme/standard-white/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "2", x: "f" }),
          imageUrl: "/assets/player-chess-theme/standard-white/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "2", x: "g" }),
          imageUrl: "/assets/player-chess-theme/standard-white/pawn.png"
        }),
        new Pawn({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "2", x: "h" }),
          imageUrl: "/assets/player-chess-theme/standard-white/pawn.png"
        }),
        new Rook({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "1", x: "h" }),
          imageUrl: "/assets/player-chess-theme/standard-white/rook.png"
        }),
        new Rook({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "1", x: "a" }),
          imageUrl: "/assets/player-chess-theme/standard-white/rook.png"
        }),
        new Knight({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "1", x: "b" }),
          imageUrl: "/assets/player-chess-theme/standard-white/knight.png"
        }),
        new Knight({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "1", x: "g" }),
          imageUrl: "/assets/player-chess-theme/standard-white/knight.png"
        }),
        new Bishop({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "1", x: "c" }),
          imageUrl: "/assets/player-chess-theme/standard-white/bishop.png"
        }),
        new Bishop({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "1", x: "f" }),
          imageUrl: "/assets/player-chess-theme/standard-white/bishop.png"
        }),
        new Queen({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "1", x: "d" }),
          imageUrl: "/assets/player-chess-theme/standard-white/queen.png"
        }),
        new King({
          playerId: PiecePlayerIdEnum.WHITE,
          pos: new PiecePosition({ y: "1", x: "e" }),
          imageUrl: "/assets/player-chess-theme/standard-white/king.png"
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
    const moves = piece.getPossibleMovesWith(this.board.piecesInGame);
    console.log(moves);
    moves.forEach(move => {
      // check if move does not make king vulnerable
      // for king, check if can castle
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

  public movePieceTo(piece: Piece, position: PiecePosition) {
    // if (this.board.turn === this.playerId) {
    // check if move is valid
    const split = arrayRemove(this.board.piecesInGame, p => p.pos.toVec2().isEqual(position.toVec2()));
    console.log("--> this.board.piecesInGame");
    console.log(this.board.piecesInGame);
    console.log("--> split");
    console.log(split);
    if (split.element) {
      if (split.element.playerId === PiecePlayerIdEnum.WHITE) {
        this.board.piecesEatenByBlack.push(split.element);
      } else {
        this.board.piecesEatenByWhite.push(split.element);
      }
    }
    piece.pos = new PiecePosition({ ...position });
    this.swapTurn();
    this.resetPlayerActions(undefined);
    // } else {
    //   console.error("Not your turn dumbass");
    // }
  }

  public resetPlayerActions(event: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.clearSelectedPiece();
    this.clearMoves();
  }

  public swapTurn() {
    this.board.turn = this.board.turn === PiecePlayerIdEnum.WHITE ? PiecePlayerIdEnum.BLACK : PiecePlayerIdEnum.WHITE;
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
