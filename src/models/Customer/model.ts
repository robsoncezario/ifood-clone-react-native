import Address from '../Address/model';

export default class Customer {
  public id?: number;
  public name?: string;
  public email?: string;
  public cpf?: string;
  public imageSrc?: string;
  public phoneNumber?: string;
  public addresses?: Array<Address>;
  public createdAt?: Date;
  public updatedAt?: Date;

  public constructor(
    id: number,
    name: string,
    email: string,
    cpf: string,
    imageSrc: string,
    phoneNumber: string,
    addresses: Array<any> = [],
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.imageSrc = imageSrc;
    this.phoneNumber = phoneNumber;
    this.addresses = addresses.map((address : any) => Address.fromJson(address));
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public static fromJson(json : any) : Customer {
    return new Customer(
      json?.id,
      json?.name,
      json?.email,
      json?.cpf,
      json?.imageSrc,
      json?.phoneNumber,
      json?.addresses,
      new Date(json?.createdAt),
      new Date(json?.updatedAt)
    );
  }

  public toJson() : Object {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      cpf: this.cpf,
      imageSrc: this.imageSrc,
      phoneNumber: this.phoneNumber,
      addresses: this.addresses?.map(a => a.toJson()),
      createdAt: this.createdAt?.toISOString(),
      updatedAt: this.updatedAt?.toISOString()
    };
  }
}