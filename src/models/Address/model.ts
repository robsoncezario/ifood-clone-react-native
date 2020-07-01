export default class Address {
  public latitude?: number;
  public longitude?: number;
  public postalCode?: string;
  public number?: string;
  public street?: string;
  public neighborhood?: string;
  public city?: string;
  public state?: string;
  public country?: string;
  public countryCode?: string;
  public updatedAt?: Date;
  public createdAt?: Date;

  public constructor(
    latitude: number,
    longitude: number,
    postalCode: string,
    number: string,
    street: string,
    neighborhood: string,
    city: string,
    state: string,
    country: string,
    countryCode: string,
    updatedAt: Date,
    createdAt: Date
  ) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.postalCode = postalCode;
    this.number = number;
    this.street = street;
    this.neighborhood = neighborhood;
    this.city = city;
    this.state = state;
    this.country = country;
    this.countryCode = countryCode;
    this.updatedAt = updatedAt;
    this.createdAt = createdAt;
  }

  public static fromJson(json: any) : Address {
    return new Address(
      json?.latitude,
      json?.longitude,
      json?.postalCode,
      json?.number,
      json?.street,
      json?.neighborhood,
      json?.city,
      json?.state,
      json?.country,
      json?.countryCode,
      new Date(json?.updatedAt),
      new Date(json?.createdAt)
    );
  }

  public toJson() : Object {
    return {
      latitude: this?.latitude,
      longitude: this?.longitude,
      postalCode: this?.postalCode,
      number: this?.number,
      street: this?.street,
      neighborhood: this?.neighborhood,
      city: this?.city,
      state: this?.state,
      country: this?.country,
      countryCode: this?.countryCode,
      updatedAt: this?.updatedAt,
      createdAt: this?.createdAt
    };
  }

  public static fromGeocoder(geoData: any) : Address {
    const now = new Date();

    return new Address(
      geoData.geometry.lat,
      geoData.geometry.lng,
      geoData.components?.postcode,
      geoData.components?.house_number,
      geoData.components?.road,
      geoData.components?.suburb,
      geoData.components?.city,
      geoData.components?.state,
      geoData.components?.country,
      geoData.components?.country_code,
      now, 
      now
    );
  }

  public format(pattern: string) : string {
    return pattern.replace(new RegExp('%n'), this?.number ?? '')
                  .replace(new RegExp('%c'), this?.city ?? '')
                  .replace(new RegExp('%S'), this?.state ?? '')
                  .replace(new RegExp('%C'), this?.country ?? '')
                  .replace(new RegExp('%N'), this?.neighborhood ?? '')
                  .replace(new RegExp('%s'), this?.street ?? '')
                  .replace(new RegExp('%cc'), this?.countryCode ?? '');
  }
}