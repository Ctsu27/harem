import { Piece, PiecePosition } from "./piece";

export class Rook extends Piece {
  constructor(payload?: OnlyProperties<Rook>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    return [];
  }
}
