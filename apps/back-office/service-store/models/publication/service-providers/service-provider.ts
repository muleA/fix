export interface ContactInfo {
  email: string;
  phone: string;
  name: string;
}

export interface Location {
  city: string;
  latitude: string;
  longitude: string;
  landmark: string;
}

export interface Address {
  country: string;
  city: string;
  houseNumber: string;
  street: string;
}

export default interface ServiceProvider {
  id?: string;
  shortName: string;
  fullName: string;
  sector: string;
  contactInfo: ContactInfo;
  location: Location;
  address: Address;
  code: string;
  organizationId: string;
  organizationName: string;
  createdAt: string;
  updatedAt: string;
}
