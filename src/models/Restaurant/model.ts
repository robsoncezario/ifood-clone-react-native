import Address from '../Address/model';
import Rating from '../Rating/model';
import Category from '../Category/model';

export default class Restaurant {
  public id?: number;
  public name?: string;
  public imageSrc?: string;
  public category?: Category;
  public address?: Address;
  public rating?: Array<Rating>;
  public exclusive?: boolean;
  public minDeliveryInterval?: number;
  public maxDeliveryInterval?: number;
  public minDeliveryPrice?: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  private _deliveryCost?: number;

  public constructor(
    id: number,
    name: string,
    imageSrc: string,
    category: any,
    address: any,
    rating: Array<any>,
    exclusive: boolean,
    minDeliveryInterval: number,
    maxDeliveryInterval: number,
    minDeliveryPrice: number,
    deliveryCost: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.imageSrc = imageSrc;
    this.category = Category.fromJson(category);
    this.address = Address.fromJson(address);
    this.rating = rating.map((a: any) => Rating.fromJson(a));
    this.exclusive = exclusive;
    this.minDeliveryInterval = minDeliveryInterval;
    this.maxDeliveryInterval = maxDeliveryInterval;
    this.minDeliveryPrice = minDeliveryPrice;
    this._deliveryCost = deliveryCost;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromJson = (json : any): Restaurant => {
    return new Restaurant(
      json?.id,
      json?.name,
      json?.imageSrc,
      json?.category,
      json?.address,
      json?.rating,
      json?.exclusive, 
      json?.minDeliveryInterval,
      json?.maxDeliveryInterval,
      json?.minDeliveryPrice,
      json?.deliveryCost,
      new Date(json?.createdAt),
      new Date(json?.updatedAt)
    );
  }

  public toJson = (): any => {
    return {
      id: this.id, 
      name: this.name,
      imageSrc: this.imageSrc,
      category: this.category?.toJson(),
      address: this.address?.toJson(),
      rating: this.rating?.map(r => r.toJson()),
      exclusive: this.exclusive,
      minDeliveryInterval: this.minDeliveryInterval,
      maxDeliveryInterval: this.maxDeliveryInterval,
      minDeliveryPrice: this.minDeliveryPrice,
      deliveryCost: this.deliveryCost,
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    }
  }

  // Pendência: Valor base + acréscimo da distância por km/h, aparentemente o iFood faz isso.
  get deliveryCost(): number {
    return this!._deliveryCost as number;
  }
}