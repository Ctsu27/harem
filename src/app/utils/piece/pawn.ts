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
    if (
      (direction === 1 && pawnPos.y === 1 && !pieceVectors.some(p => p.isEqual({ x: pawnPos.x, y: 2 }))) ||
      (direction === -1 && pawnPos.y === 6 && !pieceVectors.some(p => p.isEqual({ x: pawnPos.x, y: 5 })))
    ) {
      possibilities.push(Vec2ToPiecePosition(new Vec2(pawnPos).add({ x: 0, y: direction + direction })));
    }
    const attackPositions: [Vec2, Vec2] = [
      new Vec2(forwardPawnPos).add({ x: 1, y: 0 }),
      new Vec2(forwardPawnPos).sub({ x: 1, y: 0 })
    ];
    attackPositions.forEach(pos => {
      const piece = pieces.find(p => pos.isEqual(p.pos.toVec2()));
      if (piece && !this.isPieceSamePlayer(piece)) {
        possibilities.push(Vec2ToPiecePosition(pos));
      }
    });
    return possibilities;
  }
}
