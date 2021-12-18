export interface User {
  id: string;
  firstName: string; // input
  lastName: string; // input
  email: string; // email
  password: string; // password
  bio: string; // textarea
  birthDate: Date; //date picker
  gender: string; // select
  address: Address[]; // array
  isActive: boolean; // checkbox
  passport: string; // file
}

export interface Address {
  houseNumber: number;
  woreda: number;
  subCity: string;
  city: string;
}
