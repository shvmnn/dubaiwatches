export interface ContactInfo {
  phone: string;
  email: string;
  name?: string;
}

export interface DomainDetails {
  name: string;
  price?: string;
  currency?: string;
}

export enum PitchState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}