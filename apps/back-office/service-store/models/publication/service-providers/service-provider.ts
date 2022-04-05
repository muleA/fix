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
export interface DelegatedService {
  id: string;
  providerId: string;
  serviceId: string;
  title: string;
  dispatchingRule: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
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
  delegatedServices: DelegatedService[];
}
