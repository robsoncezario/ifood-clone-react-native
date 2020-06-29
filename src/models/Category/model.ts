export default class Category {
  public id?: number;
  public name?: string;
  public imageSrc?: string;

  public constructor(
    id: number,
    name: string,
    imageSrc: string
  ) {
    this.id = id;
    this.name = name;
    this.imageSrc = imageSrc;
  }
}