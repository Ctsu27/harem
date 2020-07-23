export type XPos = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h";
export type YPos = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";

const Ys = ["1", "2", "3", "4", "5", "6", "7", "8"];
const Xs = ["a", "b", "c", "d", "e", "f", "g", "h"];

export enum PiecePlayerIdEnum {
  WHITE = "WHITE",
  BLACK = "BLACK"
}

export class Vec2 {
  public x: number;
  public y: number;

  constructor(payload: OnlyProperties<Vec2>) {
    if (payload) {
      this.x = payload.x;
      this.y = payload.y;
    }
  }

  public add(a: OnlyProperties<Vec2>) {
    this.x += a.x;
    this.y += a.y;
    return this;
  }

  public sub(a: OnlyProperties<Vec2>) {
    this.x -= a.x;
    this.y -= a.y;
    return this;
  }

  public isEqual(a: OnlyProperties<Vec2>) {
    return this.x === a.x && this.y === a.y;
  }
}

export class PiecePosition {
  public y: YPos;
  public x: XPos;

  constructor(payload?: OnlyProperties<PiecePosition>) {
    if (payload) {
      this.y = payload.y;
      this.x = payload.x;
    }
  }

  public toVec2() {
    const x = Xs.findIndex(pos => pos === this.x);
    const y = Ys.findIndex(pos => pos === this.y);

    return new Vec2({ x, y });
  }
}

export function Vec2ToPiecePosition(a: Vec2): PiecePosition {
  return new PiecePosition({
    x: Xs[Math.floor(a.x)] as XPos,
    y: Ys[Math.floor(a.y)] as YPos
  });
}

export abstract class Piece {
  public playerId: PiecePlayerIdEnum;
  public pos: PiecePosition;
  public imageUrl: string;

  constructor(payload?: OnlyProperties<Piece>) {
    if (payload) {
      this.playerId = payload.playerId;
      this.pos = new PiecePosition({ ...payload.pos });
      this.imageUrl = payload.imageUrl;
    }
  }

  // return (XPos + YPos)[]
  public getPossibleMovesWith(pieces: Piece[]): PiecePosition[] {
    return [];
  }
}
