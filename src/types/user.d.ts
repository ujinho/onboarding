interface GeoPosition {
  lat: string;
  lng: string;
}

interface PostalAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoPosition;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: PostalAddress;
  phone: string;
  website: string;
  company: Company;
}
