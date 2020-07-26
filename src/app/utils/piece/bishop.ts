import { Piece, PiecePosition, Vec2, Vec2ToPiecePosition } from "./piece";

export class Bishop extends Piece {
  constructor(payload?: OnlyProperties<Bishop>) {
    super(payload);
  }

  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    const pieceMap: { [x: string]: { [y: string]: Piece } } = pieces.reduce(
      (acc, piece) => {
        acc[piece.pos.x][piece.pos.y] = piece;
        return acc;
      },
      {
        a: {
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
          7: undefined,
          8: undefined
        },
        b: {
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
          7: undefined,
          8: undefined
        },
        c: {
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
          7: undefined,
          8: undefined
        },
        d: {
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
          7: undefined,
          8: undefined
        },
        e: {
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
          7: undefined,
          8: undefined
        },
        f: {
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
          7: undefined,
          8: undefined
        },
        g: {
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
          7: undefined,
          8: undefined
        },
        h: {
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
          7: undefined,
          8: undefined
        }
      }
    );
    const pos = this.pos.toVec2();

    const possibilities = [
      ...this.compute(pos, new Vec2({ x: 1, y: 1 }), pieceMap),
      ...this.compute(pos, new Vec2({ x: 1, y: -1 }), pieceMap),
      ...this.compute(pos, new Vec2({ x: -1, y: -1 }), pieceMap),
      ...this.compute(pos, new Vec2({ x: -1, y: 1 }), pieceMap)
    ];
    return possibilities;
  }

  private compute(from: Vec2, dir: Vec2, pieceMap: { [x: string]: { [y: string]: Piece } }): PiecePosition[] {
    const pos = new Vec2({ ...from });
    const res = [];

    for (let idx = 0; idx < 8; idx += 1) {
      pos.add(dir);
      const piecePosition = Vec2ToPiecePosition(pos);
      if (!piecePosition.x || !piecePosition.y) {
        break;
      }
      if (
        pieceMap[piecePosition.x][piecePosition.y] &&
        pieceMap[piecePosition.x][piecePosition.y].playerId === this.playerId
      ) {
        break;
      }
      res.push(piecePosition);
      if (pieceMap[piecePosition.x][piecePosition.y]) {
        break;
      }
    }
    return res;
  }
}
