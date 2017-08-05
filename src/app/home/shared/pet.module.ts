export class Pet{
  constructor(
    public name: string,
    public level: number,
    public noOfFood: number,
    public picture: string,
    public stomach: any,
    public hungerStatus: number,
    public experience: number
  ) {}
}
