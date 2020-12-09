export interface IA {
  id?: number;
}

export class A implements IA {
  constructor(public id?: number) {}
}
