import { Piece, PiecePosition } from "./piece";

export class Queen extends Piece {
  constructor(payload?: OnlyProperties<Queen>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    return [];
  }
}
