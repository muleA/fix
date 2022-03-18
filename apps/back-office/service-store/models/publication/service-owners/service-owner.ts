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

export interface ServiceOwner {
  shortName: string;
  fullName: string;
  sector: string;
  contactInfo: ContactInfo;
  address: Address;
  code: string;
  organizationId: string;
  organizationName: string;
}
