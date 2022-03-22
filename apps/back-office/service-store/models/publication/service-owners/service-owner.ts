export interface ContactInfo {
  email: string;
  phone: string;
  managerName: string;
}

export  interface Address {
  country: string;
  city: string;
  houseNumber: string;
  street: string;
}

export default interface ServiceOwner {
  shortName: string;
  fullName: string;
  sector: string;
  contact: ContactInfo;
  address: Address;
  code: string;
  organizationId: string;
  organizationName: string;
}
