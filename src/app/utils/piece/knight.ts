import { Piece, PiecePosition, Vec2, Vec2ToPiecePosition } from "./piece";

export class Knight extends Piece {
  constructor(payload?: OnlyProperties<Knight>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    const possibilities: PiecePosition[] = [];
    const knightPos = this.pos.toVec2();
    const translates: [Vec2, Vec2, Vec2, Vec2, Vec2, Vec2, Vec2, Vec2] = [
      new Vec2(knightPos).add({ x: 1, y: 2 }),
      new Vec2(knightPos).add({ x: 2, y: 1 }),
      new Vec2(knightPos).add({ x: 2, y: -1 }),
      new Vec2(knightPos).add({ x: 1, y: -2 }),
      new Vec2(knightPos).add({ x: -1, y: -2 }),
      new Vec2(knightPos).add({ x: -2, y: -1 }),
      new Vec2(knightPos).add({ x: -2, y: 1 }),
      new Vec2(knightPos).add({ x: -1, y: 2 })
    ];

    translates.forEach(pos => {
      const piecePosition = Vec2ToPiecePosition(pos);

      if (piecePosition.x && piecePosition.y) {
        const piece = pieces.find(p => pos.isEqual(p.pos.toVec2()));
        if (!piece || !this.isPieceSamePlayer(piece)) {
          possibilities.push(Vec2ToPiecePosition(pos));
        }
      }
    });
    return possibilities;
  }
}
