export type XPos = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type YPos = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

export type PiecePlayerId = "WHITE" | "BLACK";

export class PiecePosition {
  public y: YPos;
  public x: XPos;

  constructor(payload?: OnlyProperties<PiecePosition>) {
    if (payload) {
      this.y = payload.y;
      this.x = payload.x;
    }
  }
}

export abstract class Piece {
  public playerId: PiecePlayerId;
  public pos: PiecePosition;
  public imageUrl: string;

  constructor(payload?: OnlyProperties<Piece>) {
    if (payload) {
      this.playerId = payload.playerId;
      this.pos = new PiecePosition({ ...payload.pos });
      this.imageUrl = payload.imageUrl;
    }
  }
}

export class Pawn extends Piece {
  constructor(payload?: OnlyProperties<Pawn>) {
    super(payload);
  }
}
