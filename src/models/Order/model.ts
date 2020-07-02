import Restaurant from '../Restaurant/model';

export default class Order {
  public id?: number;
  public name?: string;
  public description?: string;
  public restaurant?: Restaurant;
  public price?: number; 
  public discount?: number; 
  public createdAt?: Date;
  public updatedAt?: Date;

  public constructor(
    id: number,
    name: string,
    description: string,
    restaurant: any,
    price: number,
    discount: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.restaurant = Restaurant.fromJson(restaurant);
    this.price = price;
    this.discount = discount;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromJson = (json : any) : Order => {
    return new Order(
      json?.id,
      json?.name,
      json?.description,
      json?.restaurant,
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
      restaurantId: this.restaurant?.toJson(),
      price: this.price,
      discount: this.discount,
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    }
  }
}