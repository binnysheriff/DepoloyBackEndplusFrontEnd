export class Book
{
  id: number;
  constructor(
    public _id?: number,
    public name?: string,
    public author?: string,
    public published?: string,
    public description?: string,
    public price?: number,
  ){}
}
