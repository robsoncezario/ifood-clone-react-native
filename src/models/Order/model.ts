export default class Order {
  public id?: number;
  public name?: string;
  public description?: string;
  public price?: number; 
  public restaurantId?: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  public constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    restaurantId: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.restaurantId = restaurantId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromJson(json : any) : Order {
    return new Order(
      json?.id,
      json?.name,
      json?.description,
      json?.price,
      json?.restaurantId,
      new Date(json?.createdAt),
      new Date(json?.updatedAt)
    );
  }

  public toJson() : any {
    return {
      id: this.id, 
      name: this.name,
      description: this.description,
      price: this.price,
      restaurantId: this.restaurantId,
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    }
  }
}