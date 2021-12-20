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

export interface FormSection {
  id: number;
  sub_sections: FormSubsection[];
  name: string;
  title: string;
  updated_at: Date;
  created_at: Date;
}

export interface FormSubsection {
  id: number;
  section: number;
  completed: boolean;
  updated_at: Date;
  created_at: Date;
  name: string;
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
  id: number;
  title: string;
  index: number;
  field_type: string;
  extra_fields: string;
  helper_text: string;
  placeholder: string;
  image_required: boolean;
  updated_at: Date;
  created_at: Date;
}

export interface FormAnswer {
  id: number;
  title: string;
  question: FormQuestion;
  field_type: string;
  user: UserProfile;
  answer_text: string;
  attached_file: string;
  updated_at: Date;
  created_at: Date;
}

export interface Questionnaire {
  id: number;
  name: string;
  title: string;
  updated_at: Date;
  created_at: Date;
}

export interface PendingQuestionsResponse {
  results: FormSection[];
}

export type TokenType = string | null;

export interface UserState {
  token: TokenType | null;
  user: UserProfile | null;
}
