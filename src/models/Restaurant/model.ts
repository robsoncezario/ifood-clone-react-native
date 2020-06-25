import Address from '../Address/model';
import Rating from '../Rating/model';

export default class Restaurant {
  public id?: number;
  public name?: string;
  public description?: string;
  public address?: Address;
  public rating?: Array<Rating>;
  public createdAt?: Date;
  public updatedAt?: Date;

  public constructor(
    id: number,
    name: string,
    description: string,
    address: any,
    rating: Array<any>,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = Address.fromJson(address);
    this.rating = rating.map((a: any) => Rating.fromJson(a));
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromJson(json : any) : Restaurant {
    return new Restaurant(
      json?.id,
      json?.name,
      json?.description,
      json?.address,
      json?.rating,
      new Date(json?.createdAt),
      new Date(json?.updatedAt)
    );
  }

  public toJson() : any {
    return {
      id: this.id, 
      name: this.name,
      description: this.description,
      address: this.address?.toJson(),
      rating: this.rating?.map(r => r.toJson()),
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    }
  }
}