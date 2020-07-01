import Address from '../Address/model';
import Rating from '../Rating/model';
import Category from '../Category/model';

export default class Restaurant {
  public id?: number;
  public name?: string;
  public description?: string;
  public category?: Category;
  public address?: Address;
  public rating?: Array<Rating>;
  public exclusive?: boolean;
  public minDeliverInterval?: number;
  public maxDeliverInterval?: number;
  public minPrice?: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  private _deliveryPrice?: number;

  public constructor(
    id: number,
    name: string,
    description: string,
    category: any,
    address: any,
    rating: Array<any>,
    exclusive: boolean,
    minDeliverInterval: number,
    maxDeliverInterval: number,
    minPrice: number,
    deliveryPrice: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = Category.fromJson(category);
    this.address = Address.fromJson(address);
    this.rating = rating.map((a: any) => Rating.fromJson(a));
    this.exclusive = exclusive;
    this.minDeliverInterval = minDeliverInterval;
    this.maxDeliverInterval = maxDeliverInterval;
    this.minPrice = minPrice;
    this._deliveryPrice = deliveryPrice;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromJson(json : any) : Restaurant {
    return new Restaurant(
      json?.id,
      json?.name,
      json?.description,
      json?.category,
      json?.address,
      json?.rating,
      json?.exclusive, 
      json?.minDeliverInterval,
      json?.maxDeliverInterval,
      json?.minPrice,
      json?.deliveryPrice,
      new Date(json?.createdAt),
      new Date(json?.updatedAt)
    );
  }

  public toJson() : any {
    return {
      id: this.id, 
      name: this.name,
      description: this.description,
      category: this.category?.toJson(),
      address: this.address?.toJson(),
      rating: this.rating?.map(r => r.toJson()),
      exclusive: this.exclusive,
      minDeliverInterval: this.minDeliverInterval,
      maxDeliverInterval: this.maxDeliverInterval,
      minPrice: this.minPrice,
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    }
  }

  // Pendência: Valor base + acréscimo da distância por km/h, aparentemente o iFood faz isso.
  get deliveryPrice() : number | undefined {
    return this._deliveryPrice;
  }
}