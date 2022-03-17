export interface ContactInfo {
  email: string;
  phone: string;
  name: string;
}

export interface Location {
  city: string;
  latitude: number;
  longitude: number;
  landmark: string;
}

export interface Address {
  country: string;
  city: string;
  houseNumber: string;
  street: string;
}

export interface ServiceProvider {
  shortName: string;
  fullName: string;
  sector: string;
  contactInfo: ContactInfo;
  location: Location;
  address: Address;
  code: string;
  organizationId: string;
  organizationName: string;
}
