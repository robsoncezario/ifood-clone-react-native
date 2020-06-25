export default class Address {
  public latitude?: number;
  public longitude?: number;
  public postalCode?: string;
  public feature?: string;
  public street?: string;
  public neighborhood?: string;
  public city?: string;
  public state?: string;
  public country?: string;
  public countryCode?: string;

  public constructor(
    latitude: number,
    longitude: number,
    postalCode: string,
    feature: string,
    street: string,
    neighborhood: string,
    city: string,
    state: string,
    country: string,
    countryCode: string 
  ) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.postalCode = postalCode;
    this.feature = feature;
    this.street = street;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.country = country;
    this.countryCode = countryCode;
  }

  public static fromJson(json : any) : Address {
    return new Address(
      json?.latitude,
      json?.longitude,
      json?.postalCode,
      json?.feature,
      json?.street,
      json?.neighborhood,
      json?.city,
      json?.state,
      json?.country,
      json?.countryCode
    );
  }

  public toJson() : Object {
    return {
      latitude: this?.latitude,
      longitude: this?.longitude,
      postalCode: this?.postalCode,
      feature: this?.feature,
      street: this?.street,
      neighborhood: this?.neighborhood,
      city: this?.city,
      state: this?.state,
      country: this?.country,
      countryCode: this?.countryCode
    };
  }
}