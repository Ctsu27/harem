import { Piece, PiecePosition } from "./piece";

export class Bishop extends Piece {
  constructor(payload?: OnlyProperties<Bishop>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    return [];
  }
}
