import { PROPERTYLISTINGSAMPLE } from './../constants/index';
export interface CardProps {
  title: string;
  image: string;
  description: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}