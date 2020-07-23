import { Piece, PiecePosition } from "./piece";

export class King extends Piece {
  constructor(payload?: OnlyProperties<King>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    return [];
  }
}
