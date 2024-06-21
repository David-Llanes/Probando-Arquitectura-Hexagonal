export interface IUser {
  readonly id: string
  readonly name: string
}

export class User implements IUser {
  constructor(public readonly id: string, public readonly name: string) {}
}
