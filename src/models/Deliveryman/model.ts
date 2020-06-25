import Customer from '../Customer/model';
import Rating from '../Rating/model';

export default class Deliveryman extends Customer {
  /* Até o momento, não me lembro de algo a + além da avaliação.
     Obviamente eles devem ter um histórico de pedido, mas creio que o costumer tenha também.
  */
  public deliveryRating?: Array<Rating>;

  public constructor(
    id: number,
    name: string,
    email: string,
    cpf: string,
    imageSrc: string,
    phoneNumber: string,
    addresses: Array<any> = [],
    deliveryRating: Array<any> = [],
    createdAt: Date,
    updatedAt: Date
  ) {
    super(
      id,
      name,
      email,
      cpf,
      imageSrc,
      phoneNumber,
      addresses,
      createdAt,
      updatedAt
    );

    this.deliveryRating = deliveryRating.map((d : any) => Rating.fromJson(d));
  }

  public static fromJson(json: any) : Deliveryman {
    return new Deliveryman(
      json?.id,
      json?.name,
      json?.email,
      json?.cpf,
      json?.imageSrc,
      json?.phoneNumber,
      json?.addresses,
      json?.deliveryRating,
      new Date(json?.createdAt),
      new Date(json?.updatedAt)
    );
  }

  public toJson() : Object {
    return {
      ...super.toJson(), 
      ...{
        deliveryRating: this.deliveryRating?.map((r: Rating) => r.toJson())
      }
    };
  }
}