export default class Rating {
  public id?: number;
  public customerId: number;
  public value?: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  public constructor(
    id: number,
    customerId: number,
    value: number,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.customerId = customerId;
    this.value = value;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  /*
    O GraphQL manda o DateTime de forma perfeita para o parse no TS
  */

  public static fromJson(json : any) : Rating {
    return new Rating(
      json?.id,
      json?.customerId, 
      json?.value, 
      new Date(json?.createdAt as string),
      new Date(json?.updatedAt as string)
    );
  }

  public toJson() : any {
    return {
      id: this.id, 
      customerId: this.customerId,
      value: this.value,
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    }
  }
}