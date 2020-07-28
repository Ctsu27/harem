import { Piece, PiecePosition, Vec2, Vec2ToPiecePosition, PiecePlayerIdEnum } from "./piece";

export class King extends Piece {
  constructor(payload?: OnlyProperties<King>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    const possibilities: PiecePosition[] = [];
    const kingPos = this.pos.toVec2();
    const translates: [Vec2, Vec2, Vec2, Vec2, Vec2, Vec2, Vec2, Vec2] = [
      new Vec2(kingPos).add({ x: 0, y: 1 }),
      new Vec2(kingPos).add({ x: 1, y: 1 }),
      new Vec2(kingPos).add({ x: 1, y: 0 }),
      new Vec2(kingPos).add({ x: 1, y: -1 }),
      new Vec2(kingPos).add({ x: 0, y: -1 }),
      new Vec2(kingPos).add({ x: -1, y: -1 }),
      new Vec2(kingPos).add({ x: -1, y: 0 }),
      new Vec2(kingPos).add({ x: -1, y: 1 })
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
