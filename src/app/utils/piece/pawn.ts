import { Piece, PiecePosition } from "./piece";

export class Pawn extends Piece {
  constructor(payload?: OnlyProperties<Pawn>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    return [];
  }
}
