import { Piece, PiecePosition, PiecePlayerIdEnum, Vec2, Vec2ToPiecePosition } from "./piece";

export class Pawn extends Piece {
  constructor(payload?: OnlyProperties<Pawn>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    const possibilities: PiecePosition[] = [];
    const direction = this.playerId === PiecePlayerIdEnum.WHITE ? 1 : -1;
    const pieceVectors = pieces.map(piece => piece.pos.toVec2());
    const pawnPos = this.pos.toVec2();
    const forwardPawnPos = new Vec2(pawnPos).add({ x: 0, y: direction });

    if (!pieceVectors.some(vec => forwardPawnPos.isEqual(vec))) {
      possibilities.push(Vec2ToPiecePosition(forwardPawnPos));
    }
    return possibilities;
  }
}
