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
  id: number;
  email: string;
  name: string;
  phone_number: string;
  job_title: string;
  password: string;
  company: string;
  duns: string;
  country: string;
  username: string;
  updated_at: string;
}

export interface FormSubsection {
  title: string;
  questions: FormQuestion[];
}

export interface InquiryItem {
  title: string;
  part: string;
  sentOn: string;
  dueDate: string;
  status: string;
  owner: UserProfile;
}

export interface FormQuestion {
  title: string;
  index: number;
  field_type: string;
  extra_fields: string;
  placeholder: string;
  helper_text: string;
}

export type TokenType = string | null;

export interface UserState {
  token: TokenType | null;
  user: UserProfile | null;
}
