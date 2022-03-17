export default interface ServiceOwner {
  id: string;
  shortName: string;
  fullName: string;
  sector: string;
  contactInfo: ContactInfo;
  address: Address;
  code: string;
  organizationId: string;
  organizationName: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  name: string;
}

export interface Address {
  country: string;
  city: string;
  houseNumber: string;
  street: string;
}
