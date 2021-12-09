export interface SignUpFormInput {
  email: string;
  name: string;
  phone_number: string;
  job_title: string;
  password: string;
  company: string;
  duns: string;
  country: string;
}

export interface LogInFormInput {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  phone_number: string;
  job_title: string;
  password: string;
  company: string;
  duns: string;
  country: string;
  username: string;
}

export type TokenType = string | null;

export interface UserState {
  token: TokenType | null;
  user: UserProfile | null;
}
