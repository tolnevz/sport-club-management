export interface Client {
  id: number;
  fio: string;
  dateOfBirth: number;
  phone: string;
  email: string;
  contact1?: ClientContact;
  contact2?: ClientContact;
}

export interface ClientContact {
  fio: string;
  phone: string;
  email: string;
}
