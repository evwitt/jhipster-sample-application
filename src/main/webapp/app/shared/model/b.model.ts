export interface IB {
  id?: number;
}

export class B implements IB {
  constructor(public id?: number) {}
}
