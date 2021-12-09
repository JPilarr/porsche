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
