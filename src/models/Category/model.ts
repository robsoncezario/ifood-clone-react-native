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

  static fromJson = (json: any) : Category => {
    return new Category(
      json.id,
      json.name,
      json.imageSrc
    );
  }

  public toJson = () : any => {
    return {
      id: this.id,
      name: this.name,
      imageSrc: this.imageSrc
    }
  }
}