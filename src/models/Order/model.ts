import Restaurant from '../Restaurant/model';

export default class Order {
  public id?: number;
  public name?: string;
  public description?: string;
  public imageSrc?: string;
  public restaurant?: Restaurant;
  public discount?: number; 
  public createdAt?: Date;
  public updatedAt?: Date;

  private _price!: number;

  public constructor(
    id: number,
    name: string,
    description: string,
    imageSrc: string,
    price: number,
    discount: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageSrc = imageSrc;
    this._price = price;
    this.discount = discount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromJson = (json : any) : Order => {
    return new Order(
      json?.id,
      json?.name,
      json?.description,
      json?.imageSrc,
      json?.price,
      json?.discount,
      new Date(json?.createdAt),
      new Date(json?.updatedAt)
    );
  }

  public toJson = () : any => {
    return {
      id: this.id, 
      name: this.name,
      description: this.description,
      imageSrc: this.imageSrc,
      price: this._price,
      discount: this.discount,
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    }
  }

  get price(): number {
    return this!._price - (this.discount ?? 0);
  }
}