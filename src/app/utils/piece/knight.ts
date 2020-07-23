import { Piece, PiecePosition } from "./piece";

export class Knight extends Piece {
  constructor(payload?: OnlyProperties<Knight>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    return [];
  }
}
